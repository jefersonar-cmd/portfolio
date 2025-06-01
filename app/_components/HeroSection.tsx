"use client";

import React, { useRef, useEffect } from "react"; // Removido useState se não for mais usado para videoOpacity
import AnimatedTerminalText from "./AnimatedTerminalText";

const HeroSection: React.FC = () => {
  const skills = [
    "Desenvolvedor de Integrações (Intersystems IRIS)",
    "Dev. Back-end (Python, PHP, Node.js)",
    "React.js & JavaScript",
    "Bancos de Dados (SQL & NoSQL)",
    "Linux & Shell Script",
    "SAP ABAP & TOTVS Protheus"
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeDurationSeconds = 1.0;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    // ... (lógica do fade do vídeo permanece a mesma da resposta anterior) ...
    const handleTimeUpdate = () => {
      if (!videoElement.duration) return;
      const timeLeft = videoElement.duration - videoElement.currentTime;
      if (timeLeft <= fadeDurationSeconds && videoElement.style.opacity !== "0") {
        videoElement.style.opacity = "0";
      } else if (videoElement.currentTime <= fadeDurationSeconds && videoElement.style.opacity !== "1" && timeLeft > fadeDurationSeconds) {
        videoElement.style.opacity = "1";
      } else if (videoElement.currentTime > fadeDurationSeconds && timeLeft > fadeDurationSeconds && videoElement.style.opacity !== "1") {
        videoElement.style.opacity = "1";
      }
    };
    const handleCanPlay = () => {
        if(videoElement.currentTime < fadeDurationSeconds) {
            videoElement.style.opacity = "1";
        }
    }
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('canplay', handleCanPlay);
    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [fadeDurationSeconds]);


  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover transition-opacity ease-in-out"
        style={{ opacity: 1, transitionDuration: `${fadeDurationSeconds}s` }}
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 p-4 md:p-8 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-10 text-center">
          Olá, eu sou <span className="text-sky-400">Jefferson S. Araújo</span>
        </h1>
        <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto my-6 md:my-8">
          <AnimatedTerminalText lines={skills} />
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <a
            href="#sobre"
            className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg text-lg transition duration-300"
            aria-label="Saiba mais sobre mim"
          >
            Conheça Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;