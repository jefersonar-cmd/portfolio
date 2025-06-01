"use client"; // Se usar Framer Motion para animações de entrada

import { motion } from "framer-motion";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", title }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 min-h-[60vh] ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Anima quando 20% da seção está visível
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-sky-400">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;