# Portfólio — Leonardo Carrilho

Site: [leonardocarrilho.github.io](https://leonardocarrilho.github.io/)

Portfólio pessoal de **Leonardo Fernandes Carrilho**, desenvolvedor full stack júnior. Feito com **React + Vite + Bootstrap 5**, em português e inglês, com foto, currículo, projetos publicados e links de contato reais.

![Prévia do portfólio](docs/preview.png)

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952b3?logo=bootstrap&logoColor=white)
![CI](https://github.com/LeonardoCarrilho/LeonardoCarrilho.github.io/actions/workflows/ci.yml/badge.svg)

## Sobre o projeto

O site reúne minha trajetória, stack, formação, serviços e os oito projetos em destaque, do HTML puro ao full stack. A proposta é ser direto para recrutadores: nenhuma seção decorativa sem informação, links que abrem de verdade e a mesma experiência em desktop e celular.

### Destaques

- Alternância **PT/EN** com preferência salva no navegador;
- Hero com foto, disponibilidade, currículo em PDF e chamada para contato;
- Seções de sobre, stack, serviços, formação, projetos e contato;
- Cards de projeto com link para o **repositório** e para a **demo ao vivo**;
- Formulário que monta um `mailto:` validado, sem backend;
- Navbar fixa com seção ativa, menu mobile e barra de progresso;
- Animações com `IntersectionObserver`, respeitando `prefers-reduced-motion`;
- Acessibilidade: link de pular navegação, HTML semântico, foco visível, contraste e `aria-label`.

## Stack

- React 19 + Vite
- Bootstrap 5 + Bootstrap Icons
- CSS customizado com variáveis
- `localStorage` para idioma
- GitHub Pages para deploy

## Rodando localmente

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

O resultado fica em `dist/`.

## Estrutura

```
├── index.html
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── curriculo.pdf
│   └── foto-perfil.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/site.js           # dados, links e projetos
    ├── i18n/
    │   ├── translations.js    # textos PT/EN
    │   └── LanguageContext.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── ProfilePhoto.jsx
    │   ├── Skills.jsx
    │   ├── Services.jsx
    │   ├── Education.jsx
    │   ├── Projects.jsx
    │   ├── CtaBand.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Reveal.jsx
    │   └── ScrollProgress.jsx
    └── styles/global.css
```

## Decisões técnicas

- **Conteúdo centralizado:** dados pessoais em `src/data/site.js` e textos em `src/i18n/translations.js`, para evitar duplicação entre componentes.
- **Dois idiomas sem biblioteca:** o `LanguageContext` troca o objeto de traduções e persiste a escolha no `localStorage`.
- **Projetos reais:** os cards vêm de `site.projects` e apontam para repositórios e demos no GitHub Pages, sem dados fictícios.
- **Contato sem servidor:** o formulário valida os campos e abre o cliente de e-mail; os botões de e-mail, LinkedIn e WhatsApp funcionam diretamente.
- **Deploy na raiz do domínio:** o repositório `LeonardoCarrilho.github.io` publica o site em `https://leonardocarrilho.github.io/`, com a build na branch `gh-pages`.

## Projetos em destaque

| Projeto | Stack | Demo |
| --- | --- | --- |
| [Calculadora Trabalhista](https://github.com/LeonardoCarrilho/calculadora-trabalhista) | HTML, CSS, JavaScript | [Abrir demo](https://leonardocarrilho.github.io/calculadora-trabalhista/) |
| [Câmbio Hoje](https://github.com/LeonardoCarrilho/conversor-de-moedas) | HTML, CSS, JavaScript | [Abrir demo](https://leonardocarrilho.github.io/conversor-de-moedas/) |
| [Norte Store](https://github.com/LeonardoCarrilho/loja-virtual) | React, Vite, localStorage | [Abrir demo](https://leonardocarrilho.github.io/loja-virtual/) |
| [Dashboard de Vendas](https://github.com/LeonardoCarrilho/dashboard-vendas) | React, Vite, Recharts | [Abrir demo](https://leonardocarrilho.github.io/dashboard-vendas/) |
| [Painel Clima](https://github.com/LeonardoCarrilho/painel-clima) | React, Vite, Open-Meteo | [Abrir demo](https://leonardocarrilho.github.io/painel-clima/) |
| [API de Tarefas](https://github.com/LeonardoCarrilho/api-tarefas) | Node.js, Express, MongoDB | [Código e documentação](https://github.com/LeonardoCarrilho/api-tarefas) |
| [API de Finanças](https://github.com/LeonardoCarrilho/api-financas) | Node.js, Express, MySQL, JWT | [Código e documentação](https://github.com/LeonardoCarrilho/api-financas) |
| [Helpdesk Full Stack](https://github.com/LeonardoCarrilho/helpdesk-fullstack) | React, Node.js, MySQL, JWT | [Abrir demo](https://leonardocarrilho.github.io/helpdesk-fullstack/) |

## Deploy

O site é publicado no **GitHub Pages** a partir da branch `gh-pages`:

```bash
npm run build
# publique o conteúdo de dist/ na branch gh-pages
```

Também funciona na Vercel ou Netlify com build `npm run build` e output `dist`.

## Contato

- [LinkedIn](https://www.linkedin.com/in/leonardo-fernandes-carrilho/)
- [GitHub](https://github.com/LeonardoCarrilho)
- [E-mail](mailto:leofernandescarrilho@gmail.com)
- [Currículo](https://leonardocarrilho.github.io/curriculo.pdf)

### Validação da interface

- `npm test`: testes de persistência de idioma e categorias de projetos.
- `npx playwright install chromium`: instala o navegador de teste.
- `npm run test:e2e`: compila e valida filtros, idioma, armazenamento bloqueado, imagens, foco e responsividade.

As prévias em `public/projects/` são capturas dos projetos publicados; atualize-as quando a interface de um projeto mudar.
