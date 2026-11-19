const GH = "https://github.com/LeonardoCarrilho/";
const PAGES = "https://leonardocarrilho.github.io/";

// Contatos: preencha para exibir os botões na seção Contato.
const CONTATO = { email: "leofernandescarrilho@gmail.com", linkedin: "https://www.linkedin.com/in/leonardo-fernandes-carrilho/" };

const grandes = [
  { repo: "loja-fullstack", nome: "Loja Full Stack", vivo: "https://loja-fullstack.vercel.app",
    descricao: "Cadastro de produtos com front em React e API REST em Express sobre PostgreSQL. Consultas parametrizadas e testes da API.",
    tec: "React, Express e PostgreSQL" },
  { repo: "chatbot-ia", nome: "ChatBot com IA", vivo: "https://chatbot-ia-amber.vercel.app",
    descricao: "Chat com histórico usando o Gemini. A chave fica só no servidor, com validação e limite de requisições.",
    tec: "React, Node.js e Gemini" },
  { repo: "todolist-mongoose", nome: "TodoList", vivo: "https://todolist-mongoose.vercel.app",
    descricao: "Listas de tarefas criadas pela própria URL, com MongoDB e testes em banco em memória.",
    tec: "Express, EJS e Mongoose" },
  { repo: "blog-express", nome: "Diário do Dev", vivo: "https://blog-express-virid.vercel.app",
    descricao: "Blog renderizado no servidor, com URLs amigáveis, validação e proteção contra XSS.",
    tec: "Express, EJS e MongoDB" },
];

const menores = [
  { repo: "app-pacientes", nome: "Cadastro de Pacientes", descricao: "Cadastro em tempo real com Firebase, busca e máscara de telefone." },
  { repo: "calculadora-react", nome: "Calculadora", descricao: "Lógica em reducer puro, coberta por testes e com suporte ao teclado." },
  { repo: "foguete-orbital", nome: "Foguete Orbital", descricao: "Jogo de reflexo com física, colisão e recorde salvo no navegador." },
  { repo: "qual-e-a-cor", nome: "Qual é a cor?", descricao: "Gera cores CSS em nome, hexadecimal e RGB, com histórico e cópia." },
  { repo: "rolou-o-dado", nome: "Rolou o Dado", descricao: "Jogo de dados para dois jogadores, com placar e animação." },
];

const tela = (url, repo) => `
  <a class="tela" href="${url}" tabindex="-1" aria-hidden="true">
    <img src="img/${repo}.png" alt="" loading="lazy" width="1280" height="800">
  </a>`;

document.querySelector("#grandes").innerHTML = grandes.map((p) => `
  <article class="grande">
    <div>
      <h3>${p.nome}</h3>
      <p class="tec">${p.tec}</p>
      <p>${p.descricao}</p>
      <div class="links">
        <a class="principal" href="${p.vivo}">Abrir o app</a>
        <a href="${GH + p.repo}">Ver o código</a>
      </div>
    </div>
    ${tela(p.vivo, p.repo)}
  </article>`).join("");

document.querySelector("#menores").innerHTML = menores.map((p) => `
  <li class="menor">
    ${tela(PAGES + p.repo + "/", p.repo)}
    <div>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
    </div>
    <div class="links">
      <a class="principal" href="${PAGES + p.repo}/">Abrir</a>
      <a href="${GH + p.repo}">Código</a>
    </div>
  </li>`).join("");

if (CONTATO.email) {
  const a = document.querySelector("#link-email");
  a.href = "mailto:" + CONTATO.email;
  a.hidden = false;
}
if (CONTATO.linkedin) {
  const a = document.querySelector("#link-linkedin");
  a.href = CONTATO.linkedin;
  a.hidden = false;
}

document.querySelector("#ano").textContent = new Date().getFullYear();
