"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedLogo from "./animated-logo";

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
  projectCategories?: Record<string, Project[]>;
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
      image: "/bentolio/images/Smart Byte - Horizontal.png",
      link: "#",
    },
    { name: "Elara", link: "#" },
    { name: "Verve", link: "#" },
    { name: "Zephyr", link: "#" },
  ],
  projectCategories,
  profileImage = "/bentolio/images/Smart Byte - Horizontal.png",
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
  navLinks = [],
}: BentolioProps) {
  const router = useRouter();
  
  // Estado para gerenciar categorias
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    projectCategories ? Object.keys(projectCategories)[0] : null
  );
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Determinar quais projetos mostrar
  const displayProjects = projectCategories && selectedCategory 
    ? projectCategories[selectedCategory] 
    : projects;

  // Auto-play do carrossel
  useEffect(() => {
    if (!displayProjects || displayProjects.length <= 1 || !isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentProjectIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= displayProjects.length ? 0 : nextIndex;
        });
      }, 3000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [displayProjects, isAutoPlaying]);

  // Pausar auto-play durante interação
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Retomar auto-play após interação
  const resumeAutoPlay = () => {
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000); // Retoma após 5 segundos de inatividade
  };
  return (
    <div className="relative flex flex-col gap-4 w-full min-h-full text-black px-3 sm:px-6 py-3 sm:py-6" style={{ backgroundColor: "#000000" }}>
      <AnimatePresence>
        <header key="header" className="rounded-[20px] w-full">
          <motion.div
            style={{ backgroundColor: "#D8CFBC" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={springAnimation}
            className="flex sm:flex-row flex-col justify-between items-center p-4 sm:p-6 rounded-[20px] w-full"
          >
            <div className="w-full flex justify-center">
              <h1 className="font-light text-2xl sm:text-3xl lg:text-4xl" style={{ color: "#11120D" }}>
                <i>{name.first}</i>{" "}
                <span className="font-medium">{name.last}</span>
              </h1>
            </div>
          </motion.div>
        </header>

        <div key="main-content" className="gap-4 grid grid-cols-1 lg:grid-cols-9 flex-1">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:col-span-6">
            <div className="sm:col-span-2 lg:col-span-4 rounded-[20px] h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                style={{ backgroundColor: "#D8CFBC" }}
                className="flex flex-col justify-between p-4 sm:p-6 pb-6 sm:pb-10 rounded-[20px] h-full"
              >
                <div className="flex justify-end w-full">
                  <AnimatedLogo
                    width={180}
                    height={180}
                    className="m-0 w-36 sm:w-40 lg:w-44"
                  />
                </div>
                <p className="m-0 w-full sm:w-[90%] font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight sm:leading-tight" style={{ color: "#11120D" }}>
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
                initial={{ translateX: -100, translateY: -100 }}
                animate={{ translateX: 0, translateY: 0 }}
                transition={{ ...springAnimation, delay: 0.5 }}
                className="w-full h-full min-h-[300px] sm:min-h-[400px] bg-black rounded-[20px] overflow-hidden"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/video_smart_print.mp4" type="video/mp4" />
                  <p className="text-white text-center text-lg sm:text-xl flex items-center justify-center h-full">
                    Seu navegador não suporta vídeos.
                  </p>
                </video>
              </motion.div>
            </div>

            <div className="sm:col-span-1 lg:col-span-3">
              <motion.div
                style={{ backgroundColor: "#D8CFBC" }}
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
                <p className="m-0 w-full sm:w-[90%] font-light text-base sm:text-lg lg:text-xl" style={{ color: "#11120D" }}>
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
                style={{ backgroundColor: "#565449", color: "#11120D" }}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="w-20 sm:w-[80px] font-light text-sm sm:text-base lg:text-lg leading-tight" style={{ color: "#D8CFBC" }}>
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
                <p className="m-0 font-medium text-4xl sm:text-5xl lg:text-6xl" style={{ color: "#D8CFBC" }}>
                  Contact me
                </p>
              </motion.div>
            </Link>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="flex-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
                className="h-full p-0 rounded-[20px] flex flex-col overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 backdrop-blur-sm"
              >
                {/* Título e navegação por categorias - dentro do card */}
                 <div className="relative z-10 p-6 rounded-t-[20px] border-b" style={{ backgroundColor: "#D8CFBC", color: "#11120D" }}>
                   <h3 className="coolvetica-font text-2xl sm:text-3xl font-bold mb-4 drop-shadow-xl tracking-wide" style={{ color: "#11120D" }}>
                      Produtos
                    </h3>
                   {projectCategories && (
                     <div className="flex flex-wrap gap-3">
                       {Object.keys(projectCategories).map((category) => (
                         <button
                           key={category}
                           onClick={() => {
                             setSelectedCategory(category);
                             setCurrentProjectIndex(0);
                           }}
                           className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ease-out backdrop-blur-md ${
                              selectedCategory === category
                                ? 'shadow-xl transform scale-110 ring-2 ring-orange-300/50'
                                : 'bg-white/10 border border-white/40 hover:scale-105 hover:shadow-lg'
                            }`}
                           style={{
                             backgroundColor: selectedCategory === category ? '#1C1C1C' : 'transparent',
                             color: selectedCategory === category ? 'white' : '#11120D'
                           }}
                         >
                           {category}
                         </button>
                       ))}
                     </div>
                   )}
                 </div>
                
                {/* Área do produto atual - ocupando o espaço restante */}
                 <div className="flex-1 flex flex-col relative">
                   {displayProjects && displayProjects.length > 0 && (
                     <div className="flex-1 flex flex-col relative">
                       {/* Imagem do produto ocupando todo o espaço restante */}
                       {displayProjects[currentProjectIndex]?.image && (
                         <div 
                           className="relative w-full flex-1 cursor-grab active:cursor-grabbing"
                           onWheel={(e) => {
                             e.preventDefault();
                             pauseAutoPlay();
                             if (e.deltaY > 0) {
                               setCurrentProjectIndex(prev => 
                                 prev === displayProjects.length - 1 ? 0 : prev + 1
                               );
                             } else {
                               setCurrentProjectIndex(prev => 
                                 prev === 0 ? displayProjects.length - 1 : prev - 1
                               );
                             }
                             resumeAutoPlay();
                           }}
                           onMouseDown={(e) => {
                             pauseAutoPlay();
                             const startX = e.clientX;
                             const handleMouseMove = (moveEvent: MouseEvent) => {
                               const deltaX = moveEvent.clientX - startX;
                               setIsDragging(true);
                               
                               // Determinar direção do arrasto
                               if (Math.abs(deltaX) > 10) {
                                 setDragDirection(deltaX > 0 ? 'right' : 'left');
                               }
                               
                               if (Math.abs(deltaX) > 50) {
                                 if (deltaX > 0) {
                                   setCurrentProjectIndex(prev => 
                                     prev === 0 ? displayProjects.length - 1 : prev - 1
                                   );
                                 } else {
                                   setCurrentProjectIndex(prev => 
                                     prev === displayProjects.length - 1 ? 0 : prev + 1
                                   );
                                 }
                                 setIsDragging(false);
                                 setDragDirection(null);
                                 document.removeEventListener('mousemove', handleMouseMove);
                                 document.removeEventListener('mouseup', handleMouseUp);
                               }
                             };
                             const handleMouseUp = () => {
                               setIsDragging(false);
                               setDragDirection(null);
                               resumeAutoPlay();
                               document.removeEventListener('mousemove', handleMouseMove);
                               document.removeEventListener('mouseup', handleMouseUp);
                             };
                             document.addEventListener('mousemove', handleMouseMove);
                             document.addEventListener('mouseup', handleMouseUp);
                           }}
                         >
                          <Image
                            src={displayProjects[currentProjectIndex].image}
                            alt={displayProjects[currentProjectIndex].name}
                            fill
                            className={`object-cover transition-all duration-300 ease-out select-none ${
                              isDragging 
                                ? dragDirection === 'right' 
                                  ? 'scale-105 translate-x-2 brightness-110' 
                                  : 'scale-105 -translate-x-2 brightness-110'
                                : 'hover:scale-105'
                            }`}
                            draggable={false}
                          />
                          {/* Overlay gradiente sutil com animação */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none transition-all duration-300 ${
                            isDragging ? 'bg-gradient-to-t from-[#EF7722]/30 via-transparent to-transparent' : ''
                          }`} />
                          
                          {/* Indicador visual de direção durante o arrasto */}
                          {isDragging && dragDirection && (
                            <div className={`absolute top-1/2 transform -translate-y-1/2 z-30 transition-all duration-200 ${
                              dragDirection === 'right' ? 'left-4 animate-pulse' : 'right-4 animate-pulse'
                            }`}>
                              <div className="backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: '#EF7722CC' }}>
                                {dragDirection === 'right' ? '← Anterior' : 'Próximo →'}
                              </div>
                            </div>
                          )}
                          

                          
                          {/* Nome do produto */}
                           <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 backdrop-blur-sm">
                             <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#EF7722' }} />
                               <motion.h4 
                                 key={`${selectedCategory}-${currentProjectIndex}`}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="coolvetica-font text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-2xl tracking-wide"
                               >
                                 {displayProjects[currentProjectIndex].name}
                               </motion.h4>
                             </div>
                           </div>
                          

                          
                          {/* Contador de produtos e indicador de auto-play */}
                          {displayProjects.length > 1 && (
                            <div className="absolute top-4 right-4 flex items-center gap-2">
                              <div className="backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-white/20" style={{ backgroundColor: '#1C1C1C' }}>
                                {currentProjectIndex + 1} / {displayProjects.length}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="flex justify-between items-center px-6 sm:px-[50px] py-6 sm:py-10 rounded-[20px] font-light text-base sm:text-lg lg:text-xl"
                style={{ backgroundColor: "#D8CFBC" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
              >
                {socialLinks?.map((social) => (
                  <Link
                    className="m-0"
                    style={{ color: "#11120D" }}
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
