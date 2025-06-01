import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Adicione se tiver componentes fora de /app
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      // Adicione cores personalizadas se precisar, ou use as do Tailwind diretamente
      // colors: {
      //   'brand-primary': '#1FB2A6',
      //   'brand-secondary': '#FFC82C',
      // }
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Exemplo de animação customizada
      }
    },
  },
  plugins: [],
};
export default config;