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
  // Repositórios publicados no GitHub
  projects: [
    {
      id: "dashboard-vendas",
      repo: "https://github.com/LeonardoCarrilho/dashboard-vendas",
      demo: "https://leonardocarrilho.github.io/dashboard-vendas/",
      icon: "bi-bar-chart-line",
      tech: ["React", "Vite", "Recharts"],
    },
    {
      id: "loja-virtual",
      repo: "https://github.com/LeonardoCarrilho/loja-virtual",
      demo: "https://leonardocarrilho.github.io/loja-virtual/",
      icon: "bi-bag",
      tech: ["React", "Vite", "localStorage"],
    },
    {
      id: "api-tarefas",
      repo: "https://github.com/LeonardoCarrilho/api-tarefas",
      icon: "bi-braces",
      tech: ["Node.js", "Express", "MongoDB"],
    },
  ],
};

const nameParts = site.name.split(" ").filter(Boolean);
export const initials =
  (nameParts[0]?.[0] ?? "") + (nameParts[nameParts.length - 1]?.[0] ?? "");

export const whatsappLink = `https://wa.me/${site.whatsapp}`;
