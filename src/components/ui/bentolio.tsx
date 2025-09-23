"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedLogo from "./animated-logo";
import { LiquidButton } from "@/components/liquid-glass-button";

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
                  {/* Elemento decorativo de fundo */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#D8CFBC]/30 to-transparent rounded-full blur-lg"></div>
                  </div>
                  <source src="/videos/video_smart_print.mp4" type="video/mp4" />
                  <p className="text-white text-center text-lg sm:text-xl flex items-center justify-center h-full">
                    Seu navegador não suporta vídeos.
                  </p>
                </video>
              </motion.div>
            </div>

            <div className="sm:col-span-1 lg:col-span-3">
              <motion.div
                style={{ 
                  backgroundColor: "#D8CFBC",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ ...springAnimation, duration: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 35px 70px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="relative flex flex-col justify-between items-start gap-6 sm:gap-8 sm:px-6 sm:py-8 p-4 rounded-[24px] h-full overflow-hidden"
              >
                {/* Elementos decorativos de fundo */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute top-6 right-6 w-24 h-24 rounded-full opacity-8"
                    style={{
                      background: "radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%)",
                      filter: "blur(12px)"
                    }}
                  />
                  <div 
                    className="absolute bottom-6 left-6 w-20 h-20 rounded-full opacity-6"
                    style={{
                      background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                      filter: "blur(10px)"
                    }}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-4"
                    style={{
                      background: "conic-gradient(from 0deg, rgba(0, 0, 0, 0.02), rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.02))",
                      filter: "blur(20px)"
                    }}
                  />
                </div>

                {/* Container do ícone com design moderno */}
                <motion.div 
                  className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    y: [0, -2, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Image
                    src="/bentolio/images/Smart Print - Icone 2.svg"
                    alt="Smart Print Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 drop-shadow-sm"
                    style={{ filter: "brightness(0) saturate(100%) invert(1) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))" }}
                  />
                </motion.div>

                {/* Texto com tipografia aprimorada */}
                <div className="relative z-10 w-full">
                  <p 
                    className="m-0 w-full sm:w-[95%] font-medium text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide"
                    style={{ 
                      color: "#2C2922",
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)",
                      lineHeight: "1.6"
                    }}
                  >
                    {description}
                  </p>
                  
                  {/* Linha decorativa */}
                  <motion.div 
                    className="mt-4 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #4A453C 0%, rgba(74, 69, 60, 0.3) 50%, transparent 100%)",
                      width: "60px"
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
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
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={springAnimation}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                }}
                className="relative flex flex-col justify-between items-start gap-6 sm:gap-8 sm:px-6 sm:py-8 p-4 rounded-[24px] h-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl"
                style={{ 
                  backgroundColor: "#D8CFBC",
                  color: "#11120D",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                }}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="relative z-10 w-20 sm:w-[80px] font-light text-sm sm:text-base lg:text-lg leading-tight tracking-wide" style={{ 
                    color: "#4A453C",
                    textShadow: "0 1px 2px rgba(255, 255, 255, 0.5)"
                  }}>
                    Tem alguma dúvida?
                  </p>
                  <motion.div
                    className="relative z-10 p-2 rounded-full backdrop-blur-sm border border-white/30"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                    }}
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -3, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 15,
                      boxShadow: "0 8px 20px rgba(216, 207, 188, 0.3)"
                    }}
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 sm:w-8 drop-shadow-lg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#4A453C"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="drop-shadow(0 1px 2px rgba(255, 255, 255, 0.3))"
                      />
                    </svg>
                  </motion.div>
                </div>
                <p className="relative z-10 m-0 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none" style={{ 
                  color: "#4A453C",
                  textShadow: "0 2px 4px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(255, 255, 255, 0.3)",
                  background: "linear-gradient(135deg, #4A453C 0%, #2C2922 50%, #4A453C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Entre em contato
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
                             // Verificar se estamos no cliente antes de usar document
                             if (typeof window === 'undefined') return;
                             
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
                                 if (typeof document !== 'undefined') {
                                   document.removeEventListener('mousemove', handleMouseMove);
                                   document.removeEventListener('mouseup', handleMouseUp);
                                 }
                               }
                             };
                             const handleMouseUp = () => {
                               setIsDragging(false);
                               setDragDirection(null);
                               resumeAutoPlay();
                               if (typeof document !== 'undefined') {
                                 document.removeEventListener('mousemove', handleMouseMove);
                                 document.removeEventListener('mouseup', handleMouseUp);
                               }
                             };
                             if (typeof document !== 'undefined') {
                               document.addEventListener('mousemove', handleMouseMove);
                               document.addEventListener('mouseup', handleMouseUp);
                             }
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
                className="relative overflow-hidden rounded-[24px] p-8 backdrop-blur-sm"
                style={{ 
                  background: "#000000",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springAnimation}
              >
                {/* Brilho sutil no topo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                {/* Container LiquidButton que envolve os dois botões */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="relative w-full h-auto p-6 flex flex-col items-center justify-center gap-4 text-gray-800 hover:text-gray-900 rounded-full" style={{ alignItems: 'center', justifyContent: 'center' }}>
                     {/* Efeito liquid-glass de fundo */}
                     <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full bg-white/20
                           shadow-[0_0_6px_rgba(255,255,255,0.1),0_2px_6px_rgba(255,255,255,0.15),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(255,255,255,0.25)] 
                       transition-all 
                       dark:shadow-[0_0_8px_rgba(255,255,255,0.1),0_2px_6px_rgba(255,255,255,0.15),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(255,255,255,0.25)]" />
                     <div
                         className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full"
                         style={{ backdropFilter: 'url("#container-glass")' }}
                       />
                     
                     {/* Grid de links sociais dentro do container liquid-glass */}
                     <div className="grid grid-cols-2 gap-4 w-full relative z-10">
                       {socialLinks?.map((social, index) => (
                         <motion.div
                           key={social.name}
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: 1.4 + index * 0.1 }}
                           className="flex flex-col items-center justify-center"
                         >
                           <Link href={social.url} style={{ textDecoration: "none" }} className="w-full">
                            <LiquidButton
                              variant="default"
                              size="lg"
                              className="w-full h-16 flex flex-col items-center justify-center gap-1 text-white hover:text-white transition-all duration-300 hover:scale-105"
                              style={{ alignItems: 'center', justifyContent: 'center' }}
                            >
                               {/* Ícone baseado no nome da rede social */}
                               <div className="w-8 h-8 flex items-center justify-center">
                                 {social.name === "Instagram" && (
                                   <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                   </svg>
                                 )}
                                 {social.name === "WhatsApp" && (
                                   <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                   </svg>
                                 )}
                               </div>
                               
                               {/* Nome da rede social */}
                               <span className="text-base font-medium">
                                 {social.name}
                               </span>
                             </LiquidButton>
                           </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Filtro SVG para o efeito liquid-glass */}
                      <svg className="absolute" width="0" height="0">
                        <defs>
                          <filter id="container-glass" x="-50%" y="-50%" width="200%" height="200%">
                            <feTurbulence
                              baseFrequency="0.02 0.1"
                              numOctaves="3"
                              result="noise"
                            />
                            <feGaussianBlur in="noise" stdDeviation="0" result="blur" />
                            <feDisplacementMap
                              in="SourceGraphic"
                              in2="blur"
                              scale="8"
                              result="displacement"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                 </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
