import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import TimelineSection from "./_components/TimelineSection";
// Adicionar um Header/Navbar se quiser navegação fixa
// import Header from "./_components/Header";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      {/* Adicionar um Footer simples */}
      {/* <footer className="text-center py-8 text-gray-500 text-sm bg-slate-900">
        <p>&copy; {new Date().getFullYear()} Jefferson S.A. Todos os direitos reservados.</p>
        <p>Construído com Next.js, Tailwind CSS e muito ❤️.</p>
      </footer> */}
    </>
  );
}