const GH = "https://github.com/LeonardoCarrilho/";
const PAGES = "https://leonardocarrilho.github.io/";

const projetos = [
  { repo: "loja-fullstack", icone: "🛒", nome: "Loja Full Stack", tipo: "fullstack",
    descricao: "Cadastro de produtos com front em React e API REST em Express sobre MySQL. Consultas parametrizadas e testes da API.",
    tags: ["React", "Express", "MySQL"] },
  { repo: "chatbot-ia", icone: "🤖", nome: "ChatBot com IA", tipo: "fullstack", vivo: "https://chatbot-ia-amber.vercel.app",
    descricao: "Chat com histórico usando o Gemini. A chave fica só no servidor, com validação e limite de requisições.",
    tags: ["React", "Node.js", "Gemini"] },
  { repo: "todolist-mongoose", icone: "✅", nome: "TodoList", tipo: "backend", vivo: "https://todolist-mongoose.vercel.app",
    descricao: "Listas de tarefas personalizadas por rota dinâmica, com MongoDB e testes em banco em memória.",
    tags: ["Express", "EJS", "Mongoose"] },
  { repo: "blog-express", icone: "📝", nome: "Diário do Dev", tipo: "backend", vivo: "https://blog-express-virid.vercel.app",
    descricao: "Blog renderizado no servidor com URLs amigáveis, validação e proteção contra XSS.",
    tags: ["Express", "EJS", "MongoDB"] },
  { repo: "app-pacientes", icone: "🩺", nome: "Cadastro de Pacientes", tipo: "frontend", demo: true,
    descricao: "CRUD em tempo real com Firebase, formulário validado, busca e máscara de telefone.",
    tags: ["React", "Bootstrap", "Firebase"] },
  { repo: "calculadora-react", icone: "🧮", nome: "Calculadora", tipo: "frontend", demo: true,
    descricao: "Calculadora com lógica em reducer puro coberta por testes e suporte ao teclado.",
    tags: ["React", "Flexbox"] },
  { repo: "foguete-orbital", icone: "🚀", nome: "Foguete Orbital", tipo: "frontend", demo: true,
    descricao: "Jogo de reflexo com física, detecção de colisão e recorde salvo no navegador.",
    tags: ["JavaScript", "DOM"] },
  { repo: "qual-e-a-cor", icone: "🎨", nome: "Qual é a cor?", tipo: "frontend", demo: true,
    descricao: "Gerador de cores CSS em nomes, hexadecimal e RGB, com histórico e cópia.",
    tags: ["JavaScript", "Bootstrap"] },
  { repo: "rolou-o-dado", icone: "🎲", nome: "Rolou o Dado", tipo: "frontend", demo: true,
    descricao: "Jogo de dados para dois jogadores com placar e animação.",
    tags: ["HTML", "CSS", "JavaScript"] },
];

const grade = document.querySelector("#grade");

function render(filtro) {
  grade.innerHTML = "";
  projetos
    .filter((p) => filtro === "todos" || p.tipo === filtro)
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="icone" aria-hidden="true">${p.icone}</div>
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
        <div class="links">
          <a href="${GH + p.repo}">Código</a>
          ${p.vivo || p.demo ? `<a href="${p.vivo || PAGES + p.repo + "/"}">Ver ao vivo</a>` : ""}
        </div>`;
      grade.append(card);
    });
}

document.querySelectorAll("[data-filtro]").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll("[data-filtro]").forEach((x) => x.classList.toggle("ativo", x === b));
    render(b.dataset.filtro);
  })
);

document.querySelector("#ano").textContent = new Date().getFullYear();
render("todos");
