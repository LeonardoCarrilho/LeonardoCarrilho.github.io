/**
 * TEXTOS DO SITE (PT/EN)
 * ------------------------------------------------------------------
 * Conteúdo baseado no currículo de Leonardo Fernandes Carrilho.
 * Ao atualizar uma informação, mantenha os dois idiomas em sincronia.
 */

export const translations = {
  pt: {
    meta: {
      title: "Leonardo Carrilho — Desenvolvedor Full Stack Júnior",
      description:
        "Desenvolvedor full stack júnior formado em Ciências da Computação. React, Node.js e bancos de dados. Disponível para oportunidades em São Paulo ou remoto.",
    },
    nav: {
      about: "Sobre",
      skills: "Stack",
      services: "Serviços",
      education: "Formação",
      projects: "Projetos",
      contact: "Contato",
    },
    navCta: "Falar comigo",
    hero: {
      badge: "Disponível para oportunidades júnior",
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack Júnior",
      title: "Desenvolvo aplicações web completas",
      titleHighlight: "com clareza e vontade de aprender.",
      text: "Sou formado em Ciências da Computação e trabalho com React, Node.js e bancos de dados. Venho do Departamento Pessoal, onde aprendi precisão, prazos e processos bem feitos — bagagem que levo para o código todos os dias.",
      primary: "Vamos conversar",
      secondary: "Ver minha stack",
      resume: "Baixar currículo",
      availability: "Aberto a vagas júnior, estágio e projetos",
      stats: [
        { value: "Full Stack", label: "front-end, back-end e dados" },
        { value: "2026", label: "Ciências da Computação — USJT" },
        { value: "São Paulo", label: "remoto, híbrido ou presencial" },
      ],
      code: {
        file: "perfil.js",
        role: "Desenvolvedor Full Stack Júnior",
        focus: "aprender rápido e entregar com clareza",
      },
      codeAria: "Exemplo de código com o meu perfil",
      codeBadges: ["React", "Node.js", "MongoDB", "Git"],
    },
    about: {
      eyebrow: "Quem está por trás do código",
      title: "Sobre mim",
      paragraphs: [
        "Sou Leonardo, desenvolvedor full stack júnior em início de carreira. Formado em Ciências da Computação, venho construindo minha base em React, Node.js e bancos de dados por meio de cursos, certificados e prática constante.",
        "Antes da tecnologia, atuei no Departamento Pessoal da Proteção Águia, cuidando de folha de pagamento, registros de colaboradores e treinamentos. Foi ali que desenvolvi atenção aos detalhes, responsabilidade com prazos e a capacidade de explicar assuntos complexos de forma simples.",
        "Hoje procuro uma primeira oportunidade na área, em uma equipe que valorize aprendizado e colaboração. Se você procura alguém que pergunta antes de assumir, documenta o que faz e estuda todos os dias, vamos conversar.",
      ],
      expectationsTitle: "O que você pode esperar de mim",
      expectations: [
        "Base sólida em HTML, CSS e JavaScript",
        "Aprendizado rápido e autonomia para estudar",
        "Comunicação clara e postura colaborativa",
        "Atenção aos detalhes, herdada da rotina de DP",
      ],
      factsTitle: "Ficha rápida",
      facts: [
        { label: "Área", value: "Full Stack Júnior" },
        { label: "Formação", value: "Ciências da Computação" },
        { label: "Modelo", value: "Remoto, híbrido ou presencial" },
        { label: "Disponibilidade", value: "Imediata" },
      ],
      available: "Disponível",
    },
    skills: {
      eyebrow: "Stack",
      title: "Tecnologias que uso no dia a dia",
      text: "A base que venho construindo em cursos e prática — com honestidade sobre o que já domino e o que sigo estudando.",
      groups: [
        {
          icon: "bi-window",
          title: "Front-end",
          items: ["HTML5", "CSS3", "JavaScript", "React", "Flexbox"],
        },
        {
          icon: "bi-server",
          title: "Back-end",
          items: ["Node.js", "Java", "APIs REST"],
        },
        {
          icon: "bi-database",
          title: "Banco de dados",
          items: ["MongoDB", "Mongoose", "MySQL"],
        },
        {
          icon: "bi-tools",
          title: "Ferramentas",
          items: ["Git", "GitHub", "VS Code", "Orientação a objetos"],
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Como posso contribuir",
      text: "Entrego bem o que já domino e aprendo rápido o que faltar — sem prometer o que ainda não sei.",
      items: [
        {
          icon: "bi-code-slash",
          title: "Front-end com React",
          text: "Interfaces com HTML, CSS e React, responsivas e organizadas em componentes reutilizáveis.",
        },
        {
          icon: "bi-plug",
          title: "APIs com Node.js",
          text: "Endpoints para conectar o front-end aos dados, com atenção a validação e clareza no contrato.",
        },
        {
          icon: "bi-database",
          title: "Bancos de dados",
          text: "Modelagem e consultas com MongoDB/Mongoose e MySQL, do cadastro à leitura dos dados.",
        },
        {
          icon: "bi-people",
          title: "Processo e colaboração",
          text: "Vivência em rotinas administrativas: prazos, documentação, confidencialidade e treinamento de equipe.",
        },
      ],
    },
    process: {
      eyebrow: "Método",
      title: "Como eu trabalho",
      steps: [
        {
          title: "Entendimento",
          text: "Leio o contexto, pergunto o que não ficou claro e confirmo o que precisa ser entregue.",
        },
        {
          title: "Planejamento",
          text: "Divido a tarefa em partes pequenas e organizo o estudo e a execução.",
        },
        {
          title: "Execução",
          text: "Escrevo, testo e reviso. Peço feedback cedo para não errar no final.",
        },
        {
          title: "Entrega e evolução",
          text: "Documento o que fiz, registro aprendizados e sigo melhorando o código.",
        },
      ],
    },
    education: {
      eyebrow: "Formação",
      title: "Base técnica e aprendizado contínuo",
      text: "Graduação, cursos e certificados que sustentam o que sei hoje — e o que sigo estudando.",
      graduation: {
        type: "Graduação",
        title: "Ciências da Computação",
        org: "Universidade São Judas Tadeu — USJT",
        text: "Bacharelado com base em lógica, programação e fundamentos de computação.",
        period: "Conclusão em 2026",
        icon: "bi-mortarboard",
      },
      certifications: {
        type: "Formação complementar",
        title: "Desenvolvimento web",
        org: "Alura · OneBitCode · Fundação Bradesco",
        text: "15 certificados concluídos, de fundamentos da web a Java e orientação a objetos.",
        icon: "bi-patch-check",
        items: ["HTML", "CSS & Flexbox", "JavaScript", "Java", "POO"],
        cta: "Ver certificados no LinkedIn",
      },
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Projetos em destaque",
      text: "Aplicações completas para praticar o ciclo inteiro: interface, estado, API e dados. O código de cada uma está aberto no GitHub.",
      all: "Ver todos no GitHub",
      open: "Ver repositório",
      demo: "Abrir demo",
      status: "Código aberto",
      items: {
        "dashboard-vendas": {
          kind: "Dashboard",
          title: "Dashboard de Vendas",
          text: "Painel comercial com indicadores, receita x meta, canais de venda e tabela de pedidos.",
          highlights: ["Filtro de 6 ou 12 meses", "Gráficos de área e rosca", "Exportação em CSV"],
        },
        "loja-virtual": {
          kind: "E-commerce",
          title: "Norte Store",
          text: "Loja virtual com catálogo, busca, filtros, carrinho persistente e checkout de demonstração.",
          highlights: ["Carrinho com localStorage", "Frete grátis progressivo", "Checkout validado"],
        },
        "api-tarefas": {
          kind: "API REST",
          title: "API de Tarefas",
          text: "API para gerenciamento de tarefas, com validação, filtros, paginação e estatísticas.",
          highlights: ["CRUD completo", "MongoDB + Mongoose", "Erros centralizados"],
        },
      },
    },
    cta: {
      title: "Procurando alguém para crescer junto?",
      text: "Estou disponível para oportunidades júnior, estágio ou projetos em que eu possa contribuir desde o primeiro dia e evoluir rápido.",
      button: "Falar comigo",
      note: "Respondo em até 24h em dias úteis.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      text: "Conte sobre a vaga, o processo seletivo ou o projeto. Fale comigo por e-mail, LinkedIn ou WhatsApp — como for melhor para você.",
      emailLabel: "E-mail",
      form: {
        name: "Seu nome",
        company: "Empresa",
        email: "Seu e-mail",
        message: "Mensagem",
        messagePlaceholder: "Conte sobre a vaga, o projeto ou o processo seletivo…",
        submit: "Enviar mensagem",
        helper: "Isso abre o seu cliente de e-mail com a mensagem pronta.",
        success: "Tudo pronto! Abrimos o seu aplicativo de e-mail para concluir o envio.",
        copied: "Copiado!",
        copy: "Copiar",
        privacy: "Seus dados não são armazenados neste site.",
      },
    },
    footer: {
      tagline: "Desenvolvedor full stack júnior em busca da primeira oportunidade na área.",
      navTitle: "Navegação",
      contactTitle: "Onde me encontrar",
      rights: "Todos os direitos reservados.",
      built: "Feito com React + Bootstrap.",
    },
  },

  en: {
    meta: {
      title: "Leonardo Carrilho — Junior Full Stack Developer",
      description:
        "Junior full stack developer with a degree in Computer Science. React, Node.js and databases. Available for opportunities in São Paulo or remote.",
    },
    nav: {
      about: "About",
      skills: "Stack",
      services: "Services",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    navCta: "Let's talk",
    hero: {
      badge: "Available for junior opportunities",
      greeting: "Hi, I'm",
      role: "Junior Full Stack Developer",
      title: "I build complete web applications",
      titleHighlight: "with clarity and a will to learn.",
      text: "I have a degree in Computer Science and work with React, Node.js and databases. I come from a payroll and HR background, where I learned precision, deadlines and well-run processes — a background I bring to code every day.",
      primary: "Let's talk",
      secondary: "See my stack",
      resume: "Download résumé",
      availability: "Open to junior roles, internships and projects",
      stats: [
        { value: "Full Stack", label: "front-end, back-end and data" },
        { value: "2026", label: "Computer Science — USJT" },
        { value: "São Paulo", label: "remote, hybrid or on-site" },
      ],
      code: {
        file: "profile.js",
        role: "Junior Full Stack Developer",
        focus: "learning fast and shipping with clarity",
      },
      codeAria: "Code sample with my profile",
      codeBadges: ["React", "Node.js", "MongoDB", "Git"],
    },
    about: {
      eyebrow: "The person behind the code",
      title: "About me",
      paragraphs: [
        "I'm Leonardo, a junior full stack developer at the start of my career. With a degree in Computer Science, I've been building my foundation in React, Node.js and databases through courses, certifications and constant practice.",
        "Before technology, I worked in the payroll department at Proteção Águia, handling payroll, employee records and training sessions. That's where I developed attention to detail, accountability with deadlines and the ability to explain complex subjects simply.",
        "I'm now looking for my first opportunity in the field, on a team that values learning and collaboration. If you need someone who asks before assuming, documents what they build and studies every day, let's talk.",
      ],
      expectationsTitle: "What you can expect from me",
      expectations: [
        "Solid foundation in HTML, CSS and JavaScript",
        "Fast learning and autonomy to study",
        "Clear communication and a collaborative attitude",
        "Attention to detail, built in a payroll routine",
      ],
      factsTitle: "Quick facts",
      facts: [
        { label: "Field", value: "Junior Full Stack" },
        { label: "Education", value: "Computer Science" },
        { label: "Work model", value: "Remote, hybrid or on-site" },
        { label: "Availability", value: "Immediate" },
      ],
      available: "Available",
    },
    skills: {
      eyebrow: "Stack",
      title: "Technologies I use every day",
      text: "The foundation I've been building through courses and practice — honest about what I already know and what I'm still studying.",
      groups: [
        {
          icon: "bi-window",
          title: "Front-end",
          items: ["HTML5", "CSS3", "JavaScript", "React", "Flexbox"],
        },
        {
          icon: "bi-server",
          title: "Back-end",
          items: ["Node.js", "Java", "REST APIs"],
        },
        {
          icon: "bi-database",
          title: "Database",
          items: ["MongoDB", "Mongoose", "MySQL"],
        },
        {
          icon: "bi-tools",
          title: "Tools",
          items: ["Git", "GitHub", "VS Code", "Object-oriented programming"],
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "How I can contribute",
      text: "I deliver well what I already know and learn fast what's missing — without promising what I don't know yet.",
      items: [
        {
          icon: "bi-code-slash",
          title: "Front-end with React",
          text: "HTML, CSS and React interfaces, responsive and organized into reusable components.",
        },
        {
          icon: "bi-plug",
          title: "APIs with Node.js",
          text: "Endpoints connecting the front-end to data, with care for validation and a clear contract.",
        },
        {
          icon: "bi-database",
          title: "Databases",
          text: "Modeling and queries with MongoDB/Mongoose and MySQL, from registration to reading data.",
        },
        {
          icon: "bi-people",
          title: "Process and collaboration",
          text: "Experience with administrative routines: deadlines, documentation, confidentiality and team training.",
        },
      ],
    },
    process: {
      eyebrow: "Method",
      title: "How I work",
      steps: [
        {
          title: "Understanding",
          text: "I read the context, ask what isn't clear and confirm what needs to be delivered.",
        },
        {
          title: "Planning",
          text: "I break the task into small parts and organize study and execution.",
        },
        {
          title: "Execution",
          text: "I write, test and review. I ask for feedback early to avoid mistakes at the end.",
        },
        {
          title: "Delivery and evolution",
          text: "I document what I did, record what I learned and keep improving the code.",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Technical foundation and continuous learning",
      text: "Degree, courses and certificates that support what I know today — and what I keep studying.",
      graduation: {
        type: "Degree",
        title: "Computer Science",
        org: "Universidade São Judas Tadeu — USJT",
        text: "Bachelor's degree grounded in logic, programming and computing fundamentals.",
        period: "Graduated in 2026",
        icon: "bi-mortarboard",
      },
      certifications: {
        type: "Complementary education",
        title: "Web development",
        org: "Alura · OneBitCode · Fundação Bradesco",
        text: "15 completed certificates, from web fundamentals to Java and object-oriented programming.",
        icon: "bi-patch-check",
        items: ["HTML", "CSS & Flexbox", "JavaScript", "Java", "OOP"],
        cta: "See certificates on LinkedIn",
      },
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Featured projects",
      text: "Complete applications built to practice the whole cycle: interface, state, API and data. The code for each one is open on GitHub.",
      all: "See all on GitHub",
      open: "View repository",
      demo: "Live demo",
      status: "Open source",
      items: {
        "dashboard-vendas": {
          kind: "Dashboard",
          title: "Sales Dashboard",
          text: "A sales panel with KPIs, revenue vs. goal, sales channels and an orders table.",
          highlights: ["6 or 12-month filter", "Area and donut charts", "CSV export"],
        },
        "loja-virtual": {
          kind: "E-commerce",
          title: "Norte Store",
          text: "An online store with catalog, search, filters, a persistent cart and demo checkout.",
          highlights: ["Cart with localStorage", "Progressive free shipping", "Validated checkout"],
        },
        "api-tarefas": {
          kind: "REST API",
          title: "Task API",
          text: "A task management API with validation, filters, pagination and statistics.",
          highlights: ["Full CRUD", "MongoDB + Mongoose", "Centralized error handling"],
        },
      },
    },
    cta: {
      title: "Looking for someone to grow with?",
      text: "I'm available for junior roles, internships or projects where I can contribute from day one and evolve fast.",
      button: "Get in touch",
      note: "I reply within 24h on business days.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      text: "Tell me about the role, the hiring process or the project. Reach me by email, LinkedIn or WhatsApp — whatever works best for you.",
      emailLabel: "Email",
      form: {
        name: "Your name",
        company: "Company",
        email: "Your email",
        message: "Message",
        messagePlaceholder: "Tell me about the role, the project or the hiring process…",
        submit: "Send message",
        helper: "This opens your email client with the message ready to send.",
        success: "All set! We opened your email app to finish sending.",
        copied: "Copied!",
        copy: "Copy",
        privacy: "Your data is not stored on this website.",
      },
    },
    footer: {
      tagline: "Junior full stack developer looking for a first opportunity in tech.",
      navTitle: "Navigation",
      contactTitle: "Find me",
      rights: "All rights reserved.",
      built: "Built with React + Bootstrap.",
    },
  },
};
