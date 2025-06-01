import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi"; // FiGitBranch renomeado para FiGitFork

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string | null;
  repoUrl?: string;
  stars?: number;
  forks?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
  stars,
  forks,
}) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-sky-500/30 hover:scale-[1.02] flex flex-col h-full">
      <Image
        src={imageUrl}
        alt={`Imagem do projeto ${title}`}
        width={600} // Largura da imagem
        height={350} // Altura da imagem
        className="w-full h-48 object-cover" // Mantém a imagem responsiva e cortada
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-sky-400 mb-2 capitalize">{title.replace(/[-_]/g, " ")}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow min-h-[60px]">
          {description.length > 100 ? `${description.substring(0, 97)}...` : description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-700 text-sky-300 text-xs font-semibold rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-700">
          <div className="flex gap-3 text-gray-400">
            {typeof stars === 'number' && (
              <span className="flex items-center gap-1 text-sm">
                <FiStar className="w-4 h-4 text-yellow-400" /> {stars}
              </span>
            )}
            {typeof forks === 'number' && (
              <span className="flex items-center gap-1 text-sm">
                <FiGitBranch className="w-4 h-4 text-teal-400" /> {forks} {/* Ícone atualizado */}
              </span>
            )}
          </div>
          <div className="flex gap-4">
            {repoUrl && (
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Repositório do projeto ${title} no GitHub`}>
                <FiGithub className="w-6 h-6 text-gray-400 hover:text-sky-400 transition-colors" />
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${title} online`}>
                <FiExternalLink className="w-6 h-6 text-gray-400 hover:text-sky-400 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;