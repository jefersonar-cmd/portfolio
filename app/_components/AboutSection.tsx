import Image from "next/image";
import React from "react";
import SectionWrapper from "@/components/SectionWrapper";

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="sobre" title="Sobre Mim" className="bg-slate-800">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/images/profile-photo.jpg" // Mantenha sua foto aqui
            alt="Foto de perfil de Jefferson Santos Araújo"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-xl border-4 border-sky-500"
            priority
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            Sou Jefferson Santos Araújo, um profissional de tecnologia com paixão por desenvolvimento e integrações, 
            atualmente <strong className="text-sky-400">Analista de Suporte AMS e Desenvolvedor de Integrações Intersystems IRIS</strong> na Inter Aduaneira.
            Minha experiência abrange ambientes Linux, Windows e MacOS, com uma base sólida em Assembly, Ensemble/IRIS e SAP ABAP.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            Possuo conhecimento intermediário em tecnologias web como <strong className="text-sky-400">JavaScript, Node.js, React.js, PHP OO MVC, Python e Shell Bash</strong>, 
            além de proficiência em bancos de dados como MySQL, PostgreSQL, Microsoft SQL Server e OracleDB. 
            Minha trajetória inclui vivências como Auxiliar Administrativo, Auxiliar de Produção e Vendedor E-commerce, 
            que me proporcionaram uma visão holística.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Estou sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento, aprender continuamente e 
            contribuir para projetos inovadores. Cursando <strong className="text-sky-400">Bacharelado em Ciências da Computação</strong> (Universidade Anhembi Morumbi) 
            e especialização em <strong className="text-sky-400">Cientista de Dados</strong> (EBAC).
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;