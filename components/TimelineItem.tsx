"use client"; 

import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale-subtle.css';
import { GetTimelinePopoverContent } from './TimelinePopovers';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle?: string; // Nova prop
  description:string;
  isLeft?: boolean; 
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle, // Usar a nova prop
  description,
  isLeft,
}) => {
  const arrowClasses = isLeft
    ? "absolute top-6 right-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-slate-800"
    : "absolute top-6 left-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-slate-800";
  
  const mobileCardMargin = "ml-[3rem] mr-0 sm:ml-[4rem]"; // Ajuste para mobile
  const mobileLineLeft = "left-[22px] sm:left-[28px]"; // Posição da linha e ponto em mobile

  const triggerElement = (
    <div className={`w-full md:w-[calc(50%-2rem)] 
                     ${isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} 
                     ${mobileCardMargin} md:mt-0
                     bg-slate-800 p-5 rounded-lg shadow-xl border border-slate-700 hover:border-sky-500 transition-colors duration-300 relative z-10 cursor-default`}
    >
      <div className={`${arrowClasses} md:block hidden`}></div> {/* Seta apenas em desktop */}
      <div className={`md:hidden absolute top-6 -translate-y-1/2 left-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-slate-800`}></div> {/* Seta para mobile */}


      <h3 className={`font-bold text-xl text-gray-100 mb-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>{title}</h3>
      {subtitle && <h4 className={`text-sm text-sky-400 mb-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>{subtitle}</h4>}
      <p className={`text-sm text-gray-300 leading-relaxed ${isLeft ? 'md:text-right' : 'md:text-left'}`}>{description}</p>
    </div>
  );

  return (
    <div className={`relative mb-12 md:mb-16 flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} items-start`}>
      {/* Linha vertical e Ponto - para mobile */}
      <div className={`md:hidden absolute ${mobileLineLeft} top-0 bottom-0 flex flex-col items-center`}>
        <div className="absolute top-7 -translate-y-1/2 z-20"> {/* Ajuste do top para alinhar melhor com o texto do ano */}
            <div className="w-5 h-5 bg-slate-900 border-4 border-sky-500 rounded-full"></div>
        </div>
        <div className="w-1 h-full bg-slate-700 mt-[calc(1.75rem+0.625rem)]"></div> {/* Linha abaixo do ponto (1.75rem é o top do ano, 0.625rem é metade da altura do ponto) */}
      </div>

      {/* Ponto na Linha Central - para desktop */}
      <div className="absolute left-1/2 top-7 md:top-8 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="w-5 h-5 bg-slate-900 border-4 border-sky-500 rounded-full"></div>
      </div>
      
      {/* Ano */}
      <div className={`absolute top-0 z-10 w-auto
                       md:top-7 md:-translate-y-1/2 
                       ${isLeft ? 'md:left-auto md:right-[calc(50%+2rem)]' : 'md:left-[calc(50%+2rem)] md:right-auto'}
                       ${mobileLineLeft} -translate-x-full text-right pr-4 
                       md:text-center md:translate-x-0 md:px-0`}
      >
        <span className="inline-block bg-slate-700 text-sky-300 font-semibold px-3 py-1 rounded text-sm md:text-base">
          {year}
        </span>
      </div>

      <Tippy
        content={<GetTimelinePopoverContent year={year} />} // O 'year' aqui pode precisar ser mais específico se os popovers forem por título/empresa
        placement={isLeft ? 'left-start' : 'right-start'}
        animation="scale-subtle"
        interactive={true}
        arrow={true}
        delay={[200, 100]}
        theme="light-border" 
        appendTo={() => document.body}
        maxWidth="none"
        popperOptions={{
            modifiers: [
                { name: 'offset', options: { offset: [0, 10] } },
            ],
        }}
      >
        {triggerElement}
      </Tippy>
    </div>
  );
};

export default TimelineItem;