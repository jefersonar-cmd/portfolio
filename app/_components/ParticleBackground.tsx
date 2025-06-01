"use client"; // Este componente precisa ser um Client Component

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // ou loadFull se precisar de mais formas/interações

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    // Se precisar de mais funcionalidades: await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container); // Você pode usar isso para debug
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          // Removido para que o bg-slate-900 do body apareça
          // color: {
          //   value: "#0f172a", // Ex: slate-900
          // },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Efeito sutil ao passar o mouse
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#38bdf8", // Ex: sky-500 (sutil)
          },
          links: {
            color: "#38bdf8", // Ex: sky-500 (sutil)
            distance: 150,
            enable: true,
            opacity: 0.2, // Bem sutil
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Velocidade baixa para sutileza
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30, // Número baixo de partículas
          },
          opacity: {
            value: 0.3, // Sutil
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        style: {
          position: "fixed",
          zIndex: "-1", // Para ficar atrás de todo o conteúdo
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }
      }}
    />
  );
};

export default ParticleBackground;