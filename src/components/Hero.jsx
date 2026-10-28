import { site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  const { t, isPortuguese: pt } = useLanguage();
  return (
    <section className="intro" id="top" aria-labelledby="intro-title">
      <div className="container intro-layout">
        <div className="intro-copy">
          <span className="intro-status"><span className="pulse-dot" aria-hidden="true" />{t.hero.badge}</span>
          <p className="intro-name">{site.displayName} <span>/ Full Stack</span></p>
          <h1 id="intro-title">{pt ? "Ideias claras." : "Clear ideas."}<br /><span>{pt ? "Código que resolve." : "Code that delivers."}</span></h1>
          <p className="intro-description">{pt ? "Desenvolvo interfaces, APIs e aplicações completas com React e Node.js. Atenção aos detalhes, curiosidade para aprender e foco em quem vai usar." : "I build interfaces, APIs and complete applications with React and Node.js. Attention to detail, curiosity to learn and a focus on the people who use them."}</p>
          <div className="intro-actions">
            <a className="intro-primary" href="#projects">{pt ? "Explorar projetos" : "Explore projects"}<i className="bi bi-arrow-down-right" aria-hidden="true" /></a>
            <a className="intro-secondary" href={site.cv} target="_blank" rel="noreferrer">{t.hero.resume}<i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
          </div>
          <div className="intro-person"><ProfilePhoto className="intro-avatar" alt="Leonardo Carrilho" /><span>{t.hero.role}<small>{site.location}</small></span></div>
        </div>
        <div className="intro-work">
          <div className="work-caption"><span>{pt ? "EM FOCO / PROJETO 01" : "IN FOCUS / PROJECT 01"}</span><span>React · Recharts</span></div>
          <a className="work-preview" href="https://leonardocarrilho.github.io/dashboard-vendas/" target="_blank" rel="noreferrer" aria-label={pt ? "Abrir demonstração do Dashboard de Vendas" : "Open Sales Dashboard demo"}>
            <img src={`${import.meta.env.BASE_URL}projects/dashboard-vendas.jpg?v=20261028-design`} alt={pt ? "Dashboard de Vendas com indicadores e gráficos" : "Sales Dashboard with metrics and charts"} width="1280" height="820" fetchPriority="high" />
            <span className="work-preview-link">{pt ? "Ver projeto ao vivo" : "View live project"} <i className="bi bi-arrow-up-right" aria-hidden="true" /></span>
          </a>
          <div className="work-note"><span className="work-note-number">{String(site.projects.length).padStart(2, "0")}</span><span>{pt ? "projetos para explorar" : "projects to explore"}<small>{pt ? "Da interface ao banco de dados." : "From interface to database."}</small></span><i className="bi bi-braces" aria-hidden="true" /></div>
        </div>
      </div>
      <div className="container intro-stack" aria-label={pt ? "Tecnologias" : "Technologies"}><span>{pt ? "MINHA STACK" : "MY STACK"}</span>{["React", "JavaScript", "Node.js", "MySQL", "MongoDB", "Git"].map(item => <span key={item}>{item}</span>)}</div>
    </section>
  );
}

