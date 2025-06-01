import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contato" title="Entre em Contato">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Estou sempre aberto a novas oportunidades, colaborações ou apenas um bom bate-papo sobre tecnologia e design.
          Sinta-se à vontade para me contatar!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:jefersonaraujo86@gmail.com" // SEU EMAIL
            className="flex items-center gap-3 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg text-lg transition duration-300 w-full sm:w-auto justify-center"
            aria-label="Enviar um e-mail"
          >
            <FiMail className="w-5 h-5" />
            Enviar E-mail
          </a>
          <a
            href="https://www.linkedin.com/in/jeffsantosaraujo" // SEU LINKEDIN
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white font-semibold rounded-lg text-lg transition duration-300 w-full sm:w-auto justify-center"
            aria-label="Meu perfil no LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/jefersonar-cmd" // SEU GITHUB
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white font-semibold rounded-lg text-lg transition duration-300 w-full sm:w-auto justify-center"
            aria-label="Meu perfil no GitHub"
          >
            <FiGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;