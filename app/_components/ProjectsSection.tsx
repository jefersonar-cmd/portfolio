import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard"; // Verifique se ProjectCard aceita as novas props
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi"; // Adicionando mais ícones

// Interface para os dados do repositório do GitHub
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
  pushed_at: string;
}

async function getGithubProjects(username: string): Promise<GitHubRepo[]> {
  try {
    // Buscar repositórios, ordenados por data de push (mais recentes primeiro), até 6 itens
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=6`, {
      // Para aumentar o rate limit, você pode adicionar um token de acesso pessoal do GitHub aqui:
      // headers: {
      //   Authorization: `token ${process.env.GITHUB_TOKEN}`,
      // },
      next: { revalidate: 3600 } // Revalidar a cada hora
    });

    if (!res.ok) {
      console.error("Falha ao buscar projetos do GitHub:", res.status, await res.text());
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filtrar repositórios que não são forks e têm descrição
    return repos.filter(repo => repo.description); // Adicione mais filtros se desejar

  } catch (error) {
    console.error("Erro ao conectar com a API do GitHub:", error);
    return [];
  }
}

const ProjectsSection: React.FC = async () => { // Transformado em Server Component Assíncrono
  const githubUsername = "jefersonar-cmd"; // SEU USERNAME DO GITHUB
  const projects = await getGithubProjects(githubUsername);

  return (
    <SectionWrapper id="projetos" title="Meus Projetos Recentes">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description || "Sem descrição."}
              // Para imageUrl, você pode ter uma lógica para buscar uma imagem dentro do repo,
              // ou usar a avatar_url do owner como placeholder, ou um serviço de social cards.
              // Por simplicidade, usaremos a avatar_url do owner ou um placeholder fixo.
              imageUrl={project.owner?.avatar_url || "/images/placeholder-project.jpg"} 
              tags={project.language ? [project.language] : []} // Adicionar mais tags se tiver (ex: topics da API)
              liveUrl={project.homepage}
              repoUrl={project.html_url}
              stars={project.stargazers_count}
              forks={project.forks_count}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">
          Não foi possível carregar os projetos do GitHub no momento, ou nenhum projeto encontrado.
          Visite meu perfil em <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">{githubUsername}</a>.
        </p>
      )}
       <div className="text-center mt-12">
        <a
          href={`https://github.com/${githubUsername}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sky-500 text-sky-400 font-semibold rounded-lg text-lg hover:bg-sky-500 hover:text-white transition-colors duration-300"
        >
          <FiGithub /> Ver todos os repositórios
        </a>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;