"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseAfterDelete?: number;
  loopPause?: number;
  cursorBlinkSpeed?: number;
}

const AnimatedTerminalText: React.FC<AnimatedTerminalTextProps> = ({
  lines,
  typingSpeed = 0.07,
  deletingSpeed = 0.05,
  pauseBeforeDelete = 1.5,
  pauseAfterDelete = 0.5,
  loopPause = 1,
  cursorBlinkSpeed = 0.5,
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const currentLine = lines[currentLineIndex];
    let timer: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayText(currentLine.substring(0, displayText.length + 1));
        }, typingSpeed * 1000);
      } else {
        timer = setTimeout(() => {
          setPhase("deleting");
        }, pauseBeforeDelete * 1000);
      }
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed * 1000);
      } else {
        const isLastLine = currentLineIndex === lines.length - 1;
        const pauseDuration = isLastLine ? loopPause : pauseAfterDelete;
        timer = setTimeout(() => {
          setCurrentLineIndex((prevIndex) => (isLastLine ? 0 : prevIndex + 1));
          setPhase("typing");
        }, pauseDuration * 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [
    displayText,
    phase,
    currentLineIndex,
    lines,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseAfterDelete,
    loopPause
  ]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed * 1000);
    return () => clearInterval(cursorTimer);
  }, [cursorBlinkSpeed]);

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="font-mono text-lg md:text-2xl lg:text-3xl whitespace-nowrap text-left overflow-x-hidden"> {/* whitespace-nowrap e overflow-hidden para evitar quebra de linha do texto da skill */}
      <div className="min-h-[1.5em] flex items-center justify-center">
        <span className="text-sky-400 mr-2 select-none">$</span>
        {/* Span para o texto digitado */}
        <span>
          {displayText.split("").map((char, charIdx) => (
            <motion.span
              key={`${currentLineIndex}-${charIdx}-${char}`}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              transition={{ duration: typingSpeed / 2 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        {/* Cursor sempre após o displayText */}
        {showCursor && (
          <span className="bg-gray-200 w-2 h-5 md:h-6 inline-block animate-pulse align-bottom"></span>
        )}
      </div>
      {/* Placeholder para estabilizar a altura, se necessário. 
          Ajuste este valor com base na altura da linha do seu texto. 
          1.5em é uma estimativa para uma linha. Se a sua fonte/line-height for maior, ajuste.
          Você pode remover isso se o "pulo" de layout não for um problema ou se o container pai já tiver altura suficiente.
      */}
      <div className="h-[calc(1.5em*1)]"></div> {/* Reduzido para 1 linha extra, pois agora só temos uma linha de texto visível por vez */}
    </div>
  );
};

export default AnimatedTerminalText;