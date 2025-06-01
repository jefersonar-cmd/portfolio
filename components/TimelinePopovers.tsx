import React from 'react';

// Estilo base para os popovers (pode ser ajustado)
const popoverBaseStyle = "bg-white text-slate-900 p-0 rounded-md shadow-xl w-72 h-48 border border-slate-300 overflow-hidden flex flex-col text-xs";
const popoverHeaderStyle = "flex-shrink-0 p-1.5 bg-slate-100 border-b border-slate-300 text-slate-600 flex items-center";
const browserDotStyle = "inline-block w-2.5 h-2.5 rounded-full mr-1";

// Popover para 2016: "Hello World"
export const HelloWorldPopover: React.FC = () => (
  <div className={popoverBaseStyle}>
    <div className={popoverHeaderStyle}>
      <span className={`${browserDotStyle} bg-red-400`}></span>
      <span className={`${browserDotStyle} bg-yellow-400`}></span>
      <span className={`${browserDotStyle} bg-green-400 mr-2`}></span>
      index.html
    </div>
    <div className="p-3 flex-grow overflow-auto leading-snug font-mono">
      <span className="text-sky-600">&lt;!DOCTYPE html&gt;</span><br/>
      <span className="text-sky-600">&lt;html&gt;</span><br/>
      <span className="text-sky-600 ml-2">&lt;head&gt;</span><br/>
      <span className="text-sky-600 ml-4">&lt;title&gt;</span><span className="text-slate-800">My First Page</span><span className="text-sky-600">&lt;/title&gt;</span><br/>
      <span className="text-sky-600 ml-2">&lt;/head&gt;</span><br/>
      <span className="text-sky-600 ml-2">&lt;body style="</span><span className="text-purple-600">background</span><span className="text-slate-800">: #f0f9ff; </span><span className="text-purple-600">display</span><span className="text-slate-800">:flex; ...</span><span className="text-sky-600">"&gt;</span><br/>
      <span className="text-sky-600 ml-4">&lt;h1 style="</span><span className="text-purple-600">color</span><span className="text-slate-800">: #0ea5e9; ...</span><span className="text-sky-600">"&gt;</span><br/>
      <span className="text-slate-800 ml-6">Hello World!</span><br/>
      <span className="text-sky-600 ml-4">&lt;/h1&gt;</span><br/>
      <span className="text-sky-600 ml-2">&lt;/body&gt;</span><br/>
      <span className="text-sky-600">&lt;/html&gt;</span>
    </div>
  </div>
);

// Popover para 2018: Exemplo de um site simples
export const SimpleWebsitePopover: React.FC = () => (
  <div className={popoverBaseStyle}>
    <div className={popoverHeaderStyle}>
      <span className={`${browserDotStyle} bg-red-400`}></span>
      <span className={`${browserDotStyle} bg-yellow-400`}></span>
      <span className={`${browserDotStyle} bg-green-400 mr-2`}></span>
      portfolio-v1.com
    </div>
    <div className="flex-grow bg-sky-50 p-4 flex flex-col items-center justify-start">
        <div className="w-full h-6 bg-sky-600 rounded-t-md flex items-center px-3 shadow-md">
            <span className="text-white font-bold text-[10px]">My Awesome Site</span>
        </div>
        <div className="w-full h-24 bg-white p-3 border-x-2 border-b-2 border-sky-600/50 rounded-b-md shadow-inner">
            <p className="text-sky-700 font-semibold text-sm">Welcome!</p>
            <div className="w-10/12 h-2 bg-sky-200 my-1.5 rounded-sm"></div>
            <div className="w-8/12 h-2 bg-sky-200 rounded-sm"></div>
            <div className="w-9/12 h-2 bg-sky-200 mt-1.5 rounded-sm"></div>
        </div>
        <button className="mt-3 px-3 py-1 bg-sky-500 text-white text-[10px] rounded shadow hover:bg-sky-600 transition-colors">
            Learn More
        </button>
    </div>
  </div>
);

// Adicione mais componentes de popover para outros anos aqui...
// Exemplo:
// export const ReactCodePopover: React.FC = () => ( /* ... seu JSX ... */ );
// export const AIPopover: React.FC = () => ( /* ... seu JSX ... */ );

// Componente para selecionar o popover correto com base no ano
interface GetTimelinePopoverContentProps {
  year: string;
}
export const AdminPopover: React.FC = () => (
  <div className={popoverBaseStyle}>
    <div className={popoverHeaderStyle}>Ministério da Agricultura</div>
    <div className="p-3 flex-grow flex items-center justify-center">
      <p className="text-center">Organização de documentos e atendimento ao público, desenvolvendo habilidades de comunicação e gestão.</p>
      {/* Adicionar ícones: pasta, calendário, pessoa */}
    </div>
  </div>
);

export const ProductionAssistantPopover: React.FC = () => (
  <div className={popoverBaseStyle}>
    <div className={popoverHeaderStyle}>Golapu Fashion</div>
    <div className="p-3 flex-grow flex items-center justify-center">
      <p className="text-center">Foco em qualidade, logística e organização da produção de moda.</p>
      {/* Adicionar ícones: caixa, checklist, peça de roupa */}
    </div>
  </div>
);


// ... Crie outros para AnalistaSistemasN1, DevWebEcommerce, AnalistaAMS, CientistaDados, Bacharelado ...

export const GetTimelinePopoverContent: React.FC<GetTimelinePopoverContentProps> = ({ year }) => {
  // O 'year' atual é uma string como "2016-17". Você pode precisar de uma lógica mais robusta
  // para mapear para o popover correto, ou passar um 'id' único do item da timeline.
  // Por simplicidade, usaremos o 'year' como está, mas idealmente seria um ID.
  if (year.startsWith("2016")) return <AdminPopover />;
  if (year.startsWith("2018")) return <ProductionAssistantPopover />;
  if (year.startsWith("2019")) return <SimpleWebsitePopover />; // Reutilizando para Analista N1 por agora
  if (year === "2020") return <HelloWorldPopover />; // Reutilizando para Dev Web por agora
  if (year === "2020-Atual") return <div className="p-2">Integrações IRIS - Inter Aduaneira</div>; // Placeholder
  if (year === "2023-Atual") return <div className="p-2">Estudando Data Science na EBAC!</div>; // Placeholder
  if (year === "2024-Atual") return <div className="p-2">Cursando C. da Computação na Anhembi!</div>; // Placeholder
  
  return <div className="p-2 bg-white text-black rounded shadow">Detalhes para {year} em breve!</div>;
};

