import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import TimelineItem from "@/components/TimelineItem";

const timelineDataAsc = [
    { year: "2016-17", title: "Estágio Administrativo", company: "Ministério da Agricultura", description: "Atendimento, agendamentos, cadastros e organização de documentos, iniciando minha jornada profissional." },
    { year: "2018-19", title: "Auxiliar de Produção", company: "Golapu Fashion", description: "Verificação de qualidade de produtos, organização, empacotamento e otimização de processos logísticos." },
    { year: "2019-20", title: "Analista de Sistemas N1", company: "Stefanini (Cliente: Carrefour)", description: "Suporte a aplicações ERP/POS Linux, atendimento de chamados (Sara/Jira) e suporte técnico remoto." },
    { year: "2020", title: "Dev. Web & E-commerce", company: "Autônomo / Rama Costa", description: "Criação de websites responsivos, aplicação de estratégias de marketing digital e gerenciamento de vendas online." },
    { year: "2020-Atual", title: "Analista AMS & Dev. Integrações IRIS", company: "Inter Aduaneira", description: "Suporte especializado e desenvolvimento em integrações Intersystems IRIS, análise de causa raiz e otimização de processos de negócio." },
    { year: "2023-Atual", title: "Pós-graduação Cientista de Dados", company: "EBAC", description: "Foco em análise de dados, machine learning, Python, e ferramentas de visualização para extrair insights valiosos." },
    { year: "2024-Atual", title: "Bacharelado C. da Computação", company: "Anhembi Morumbi", description: "Aprofundando conhecimentos em algoritmos, estruturas de dados, paradigmas de programação e arquitetura de software." }
];


const TimelineSection: React.FC = () => {
  return (
    <SectionWrapper id="jornada" title="Minha Jornada" className="bg-slate-900 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-slate-700 transform -translate-x-1/2 rounded-full z-0 md:block hidden"></div>
           {/* Em mobile, a linha pode ser desenhada por cada item ou removida para um layout mais simples */}


          {timelineDataAsc.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              subtitle={item.company} // Adicionando subtitulo para a empresa/instituição
              description={item.description}
              isLeft={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TimelineSection;