import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./_components/ParticleBackground";
// Se você criou o arquivo de temas do Tippy, importe-o aqui:
// import '../styles/tippy-themes.css'; // Exemplo de caminho

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jefferson Santos Araújo | Desenvolvedor de Software e Integrações",
  description: "Portfólio de Jefferson Santos Araújo, desenvolvedor especialista em integrações Intersystems IRIS, Back-end com Python, PHP, Node.js, e Front-end com React e Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} bg-slate-900 text-gray-200 font-sans antialiased`}>
        <ParticleBackground />
        <main>{children}</main>
        <footer className="text-center py-8 text-gray-500 text-sm bg-slate-900 border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} Jefferson Santos Araújo. Todos os direitos reservados.</p>
          <p>Construído com Next.js, Tailwind CSS e ❤️.</p>
        </footer>
      </body>
    </html>
  );
}