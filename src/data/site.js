/**
 * DADOS DO SITE
 * ------------------------------------------------------------------
 * Informações reais de Leonardo Fernandes Carrilho (base: currículo).
 * Tudo aqui é usado em vários pontos da página (navbar, hero, contato, rodapé).
 */
const base = import.meta.env.BASE_URL;

export const site = {
  name: "Leonardo Fernandes Carrilho",
  displayName: "Leonardo Carrilho",
  email: "leofernandescarrilho@gmail.com",
  // Número com código do país, apenas dígitos
  whatsapp: "5511916485368",
  // Como o número aparece na página
  whatsappDisplay: "+55 (11) 91648-5368",
  location: "São Paulo, SP — Brasil",
  linkedin: "https://www.linkedin.com/in/leonardo-fernandes-carrilho/",
  github: "https://github.com/LeonardoCarrilho",
  // Currículo real (public/curriculo.pdf)
  cv: `${base}curriculo.pdf`,
  // Foto real em public/foto-perfil.png
  photo: `${base}foto-perfil.png`,
  // Repositórios publicados no GitHub, do fundamental ao avançado
  projects: [
    {
      id: "calculadora-trabalhista",
      repo: "https://github.com/LeonardoCarrilho/calculadora-trabalhista",
      demo: "https://leonardocarrilho.github.io/calculadora-trabalhista/",
      icon: "bi-calculator",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "conversor-de-moedas",
      repo: "https://github.com/LeonardoCarrilho/conversor-de-moedas",
      demo: "https://leonardocarrilho.github.io/conversor-de-moedas/",
      icon: "bi-currency-exchange",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "loja-virtual",
      repo: "https://github.com/LeonardoCarrilho/loja-virtual",
      demo: "https://leonardocarrilho.github.io/loja-virtual/",
      icon: "bi-bag",
      tech: ["React", "Vite", "localStorage"],
    },
    {
      id: "dashboard-vendas",
      repo: "https://github.com/LeonardoCarrilho/dashboard-vendas",
      demo: "https://leonardocarrilho.github.io/dashboard-vendas/",
      icon: "bi-bar-chart-line",
      tech: ["React", "Vite", "Recharts"],
    },
    {
      id: "painel-clima",
      repo: "https://github.com/LeonardoCarrilho/painel-clima",
      demo: "https://leonardocarrilho.github.io/painel-clima/",
      icon: "bi-cloud-sun",
      tech: ["React", "Vite", "Open-Meteo"],
    },
    {
      id: "api-tarefas",
      repo: "https://github.com/LeonardoCarrilho/api-tarefas",
      icon: "bi-braces",
      tech: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "api-financas",
      repo: "https://github.com/LeonardoCarrilho/api-financas",
      icon: "bi-wallet2",
      tech: ["Node.js", "Express", "MySQL", "JWT"],
    },
    {
      id: "helpdesk-fullstack",
      repo: "https://github.com/LeonardoCarrilho/helpdesk-fullstack",
      demo: "https://leonardocarrilho.github.io/helpdesk-fullstack/",
      icon: "bi-headset",
      tech: ["React", "Node.js", "MySQL", "JWT"],
    },
  ],
};

const nameParts = site.name.split(" ").filter(Boolean);
export const initials =
  (nameParts[0]?.[0] ?? "") + (nameParts[nameParts.length - 1]?.[0] ?? "");

export const whatsappLink = `https://wa.me/${site.whatsapp}`;
