# Landing Page — Desenvolvedor Full Stack

Página pessoal de apresentação profissional, feita com **React + Vite + Bootstrap 5**, em português e inglês.

Visual clean e claro, responsiva, com animações suaves, formulário de contato (via cliente de e-mail) e botão de troca de idioma.

---

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

O resultado fica na pasta `dist/`. Você pode publicar em **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages** (para GitHub Pages, adicione `base: "/nome-do-repo/"` no `vite.config.js`).

---

## O que personalizar (5 minutos)

### 1. Seus dados — `src/data/site.js`

```js
export const site = {
  name: "Leonardo Fernandes Carrilho",
  displayName: "Leonardo Carrilho",   // nome curto usado na navbar e no hero
  email: "leofernandescarrilho@gmail.com",
  whatsapp: "5511916485368",          // só números, com DDI
  whatsappDisplay: "+55 (11) 91648-5368",
  location: "São Paulo, SP — Brasil",
  linkedin: "https://www.linkedin.com/in/leonardo-fernandes-carrilho/",
  github: "https://github.com/LeonardoCarrilho",
  cv: `${import.meta.env.BASE_URL}curriculo.pdf`,
  photo: `${import.meta.env.BASE_URL}foto-perfil.png`,
  // Repositórios exibidos na seção Projetos
  projects: [
    // { id, repo, icon, tech }
  ],
};
```

Esse arquivo alimenta navbar, hero, sobre, contato, projetos e rodapé. Se `github` ficar vazio, os links do GitHub são escondidos automaticamente.

### 2. Foto de perfil

Salve sua foto em **`public/foto-perfil.png`** (rosto centralizado; a foto atual tem 157×112 px e é exibida em 104 px, então fica nítida).

A foto aparece no card da seção **Sobre** e em miniatura no topo do hero. Se o arquivo não existir, o site mostra um monograma com as iniciais (LC) — nada quebra.

Se usar outro nome ou formato (ex.: `foto.jpg`), atualize o campo `photo` em `src/data/site.js`.

### 3. Textos — `src/i18n/translations.js`

Todo o conteúdo está em dois blocos: `pt` e `en`. Edite os dois para manter a versão em inglês atualizada.

O conteúdo atual foi escrito a partir do currículo: formação, experiência, tecnologias e certificados. Se você concluir um curso novo ou mudar de objetivo, atualize os dois idiomas.

### 4. Currículo

O arquivo `public/curriculo.pdf` já é o seu currículo real. Quando atualizar o PDF, substitua o arquivo mantendo o mesmo nome (ou ajuste `cv` em `src/data/site.js`).

### 5. Formação e certificados

A seção **Formação** (`src/components/Education.jsx`) é alimentada por `education.graduation` e `education.certifications` em `translations.js`:

- **Graduação:** Ciências da Computação — Universidade São Judas Tadeu (USJT), conclusão em 2026.
- **Formação complementar:** 15 certificados da Alura, OneBitCode e Fundação Bradesco.

Ícones disponíveis: [Bootstrap Icons](https://icons.getbootstrap.com/) — use o nome com `bi-` (ex.: `bi-code-slash`).

### 6. Projetos publicados

A seção **Projetos** (`src/components/Projects.jsx`) exibe três repositórios reais do perfil [LeonardoCarrilho](https://github.com/LeonardoCarrilho):

| Repositório | Projeto | Stack |
| --- | --- | --- |
| [dashboard-vendas](https://github.com/LeonardoCarrilho/dashboard-vendas) | Dashboard comercial | React + Vite + Recharts |
| [loja-virtual](https://github.com/LeonardoCarrilho/loja-virtual) | Norte Store | React + Vite |
| [api-tarefas](https://github.com/LeonardoCarrilho/api-tarefas) | API de tarefas | Node + Express + MongoDB |

Os cards são montados a partir de `site.projects` (links e tecnologias) e dos textos em `projects.items` em `translations.js`. Para adicionar outro projeto, inclua um item nos dois lugares com o mesmo `id`.

### 7. Cores e tipografia — `src/styles/global.css`

No topo do arquivo, em `:root`:

```css
--brand: #c2410c;     /* cor principal (laranja queimado) */
--brand-2: #d9480f;   /* fim do gradiente dos botões */
--accent: #e07d3a;    /* laranja da foto, usado em detalhes */
--ink: #1c1917;       /* cor do texto */
--bg-soft: #fbf7f2;   /* fundo quente das seções alternadas */
```

---

## Formulário de contato

Por padrão, o formulário **não usa servidor**: ele monta um e-mail com os dados preenchidos e abre o aplicativo de e-mail do visitante (Gmail, Outlook etc.).

Se quiser receber as mensagens direto na caixa de entrada, troque o `handleSubmit` em `src/components/Contact.jsx` por um serviço como [Formspree](https://formspree.io/), [Web3Forms](https://web3forms.com/) ou [EmailJS](https://www.emailjs.com/). É uma alteração de poucas linhas.

> Enquanto isso, os botões de e-mail, LinkedIn e WhatsApp já funcionam de verdade.

---

## Estrutura do projeto

```
├── index.html
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── curriculo.pdf          ← currículo real
│   └── foto-perfil.png        ← sua foto
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/site.js           ← seus dados e links
    ├── i18n/
    │   ├── translations.js    ← textos PT/EN
    │   └── LanguageContext.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── ProfilePhoto.jsx   ← foto com fallback de iniciais
    │   ├── Skills.jsx
    │   ├── Services.jsx
    │   ├── Education.jsx
    │   ├── Projects.jsx        ← cards dos repositórios
    │   ├── CtaBand.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Reveal.jsx
    │   └── ScrollProgress.jsx
    └── styles/global.css
```

---

## Detalhes implementados

- Idioma PT/EN com preferência salva no navegador (`localStorage`)
- Foto de perfil com fallback para as iniciais (nada quebra se a imagem faltar)
- Conteúdo baseado no currículo real (formação, experiência, stack e certificados)
- Navbar fixa com seção ativa, menu mobile e barra de progresso de leitura
- Animações ao entrar na tela com `IntersectionObserver` (respeitam `prefers-reduced-motion`)
- Layout responsivo em Bootstrap 5, sem dependência de jQuery
- Formulário validado no navegador e montagem automática do `mailto:`
- Botão "copiar e-mail" com feedback visual
- Acessibilidade: link de pular navegação, `aria-label`, foco visível, contraste e HTML semântico

---

## Boa sorte na busca! 🚀

Sugestões para usar esta página na prática:

1. Coloque o link no topo do LinkedIn e do currículo.
2. Mande o link direto no e-mail para recrutadores, junto com uma frase curta sobre a vaga.
3. Antes de enviar, teste em celular e confira se todos os links abrem.
