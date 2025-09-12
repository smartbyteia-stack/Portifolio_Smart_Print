"use client";

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Project {
  name: string;
  image?: string;
  link?: string;
}

interface NameProps {
  first: string;
  last: string;
}

interface BentolioProps {
  bg?: string;
  secondary?: string;
  name?: NameProps;
  title?: string;
  secondaryTextColor?: string;
  curvedText?: string;
  description?: string;
  projects?: Project[];
  profileImage?: string;
  contactLink?: string;
  socialLinks?: {
    name: string;
    url: string;
  }[];
  navLinks?: string[];
}

const springAnimation = {
  type: "spring" as const,
  duration: 1,
  delay: 1,
};

export default function Bentolio({
  bg = "#FADCD9",
  secondary = "#F8AFA6",
  secondaryTextColor = "#000",
  name = {
    first: "JULIA",
    last: "HUANG",
  },
  title = "Artist Redefining Architecture with AI-Driven Design",
  curvedText = "Architecture",
  description = "Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.",
  projects = [
    {
      name: "Musea",
      image: "https://atomix-ui.vercel.app/bentolio/images/bentolio.png",
      link: "#",
    },
    { name: "Elara", link: "#" },
    { name: "Verve", link: "#" },
    { name: "Zephyr", link: "#" },
  ],
  profileImage = "/bentolio/images/bentolio.png",
  socialLinks = [
    {
      name: "Instagram",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "LinkedIn",
      url: "#",
    },
  ],
  contactLink = "#",
  navLinks = ["PROJECTS", "ABOUT", "CONTACT"],
}: BentolioProps) {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-4 mx-auto sm:px-0 p-3 sm:p-6 w-full max-w-[1200px] text-black">
      <AnimatePresence>
        <header key="header" className="rounded-[20px] w-full">
          <motion.div
            style={{ backgroundColor: bg }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={springAnimation}
            className="flex sm:flex-row flex-col justify-between items-center p-4 sm:p-6 rounded-[20px] w-full"
          >
            <h1 className="mb-4 sm:mb-0 font-light text-black text-xl sm:text-2xl">
              <i>{name.first}</i>{" "}
              <span className="font-medium">{name.last}</span>
            </h1>
            <nav className="flex items-center gap-6 sm:gap-12">
              {navLinks.map((link) => (
                <p key={link} className="font-light text-sm sm:text-base">
                  {link}
                </p>
              ))}
            </nav>
          </motion.div>
        </header>

        <div key="main-content" className="gap-4 grid grid-cols-1 lg:grid-cols-9">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:col-span-6">
            <div className="sm:col-span-2 lg:col-span-4 rounded-[20px] h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                style={{ backgroundColor: bg }}
                className="flex flex-col justify-between p-4 sm:p-6 pb-6 sm:pb-10 rounded-[20px] h-full"
              >
                <div className="flex justify-end w-full">
                  <Image
                    src="https://atomix-ui.vercel.app/bentolio/svg/flower.svg"
                    alt="flower"
                    width={80}
                    height={80}
                    className="m-0 w-16 sm:w-20 lg:w-24"
                  />
                </div>
                <p className="m-0 w-full sm:w-[90%] font-bold text-3xl text-black sm:text-[44px] leading-tight sm:leading-[44px]">
                  {title.includes(curvedText) ? (
                    title.split(curvedText).map((part, i) =>
                      i === 0 ? (
                        <React.Fragment key={`title-part-${i}-${part.trim()}`}>{part}</React.Fragment>
                      ) : (
                        <React.Fragment key={`title-part-${i}-${part.trim()}`}>
                          <i className="font-light">{curvedText}</i>
                          {part}
                        </React.Fragment>
                      )
                    )
                  ) : (
                    title
                  )}
                </p>
              </motion.div>
            </div>

            <div className="sm:col-span-2 lg:col-span-2 rounded-[20px]">
              <motion.div
                initial={{ translateX: -40, translateY: 40 }}
                animate={{ translateX: 0, translateY: 0 }}
                transition={{ ...springAnimation, delay: 0.5 }}
                className="w-full h-full min-h-[300px] sm:min-h-[400px]"
              >
                <Image
                  src={profileImage}
                  alt="profile"
                  width={330}
                  height={476}
                  className="m-0 rounded-[20px] w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <div className="sm:col-span-1 lg:col-span-3">
              <motion.div
                style={{ backgroundColor: bg }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                className="flex flex-col justify-between items-start gap-6 sm:gap-8 sm:px-6 sm:py-8 p-4 rounded-[20px] h-full"
              >
                <Image
                  src="https://atomix-ui.vercel.app/bentolio/svg/circle.svg"
                  alt="circle"
                  width={32}
                  height={32}
                  className="w-6 sm:w-8"
                />
                <p className="m-0 w-full sm:w-[90%] font-light text-sm">
                  {description}
                </p>
              </motion.div>
            </div>

            <Link
              href={contactLink}
              style={{
                textDecoration: "none",
              }}
              className="sm:col-span-1 lg:col-span-3 text-black cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                className="flex flex-col justify-between items-start gap-6 sm:gap-8 sm:px-6 sm:py-8 p-4 rounded-[20px] h-full"
                style={{ backgroundColor: secondary, color: secondaryTextColor }}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="w-20 sm:w-[80px] font-light text-xs sm:text-sm leading-tight sm:leading-[16px]">
                    Have some questions?
                  </p>
                  <Image
                    src="https://atomix-ui.vercel.app/bentolio/svg/arrow.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                    className="w-6 sm:w-8"
                  />
                </div>
                <p className="m-0 font-medium text-3xl sm:text-[50px]">
                  Contact me
                </p>
              </motion.div>
            </Link>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                style={{ backgroundColor: bg }}
                className="flex-1 sm:px-6 sm:py-8 p-4 rounded-[20px]"
              >
                {projects.map((project, index) => (
                  <div key={project.name}>
                    {index === 0 ? (
                      <>
                        <Link
                          href={project.link || "#"}
                          style={{
                            textDecoration: "none",
                          }}
                          className="flex justify-between items-center w-full text-black"
                        >
                          <p className="m-0 font-medium text-xl sm:text-2xl">
                            {project.name}
                          </p>
                          <Image
                            src="https://atomix-ui.vercel.app/bentolio/svg/arrow.svg"
                            alt="arrow"
                            width={24}
                            height={24}
                            className="w-5 sm:w-6"
                          />
                        </Link>
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={330}
                            height={330}
                            className="mt-4 sm:mt-5 mb-6 sm:mb-[30px] rounded-[20px] w-full h-[160px] sm:h-[200px] object-cover"
                          />
                        )}
                      </>
                    ) : (
                      <div
                        onClick={() => router.push(project.link || "#")}
                        className="py-6 sm:py-8 border-t-[2px] cursor-pointer"
                        style={{ borderTopColor: secondary }}
                      >
                        <p className="m-0 font-medium text-xl sm:text-2xl">
                          {project.name}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div
                className="flex justify-between items-center px-6 sm:px-[50px] py-6 sm:py-10 rounded-[20px] font-light text-xs sm:text-sm"
                style={{ backgroundColor: bg }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
              >
                {socialLinks?.map((social) => (
                  <Link
                    className="m-0 text-black"
                    style={{
                      textDecoration: "none",
                    }}
                    href={social.url}
                    key={social.name}
                  >
                    {social.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
