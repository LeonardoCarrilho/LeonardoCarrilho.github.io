import { site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import ProfilePhoto from "./ProfilePhoto";
import Reveal from "./Reveal";

function CodeLine({ indent = 0, children }) {
  return (
    <div className="code-line" style={{ paddingLeft: `${indent * 1.35}rem` }}>
      {children}
    </div>
  );
}

function CodeWindow() {
  const { t } = useLanguage();
  const code = t.hero.code;

  return (
    <div className="code-wrap">
      <div className="code-window">
        <div className="code-head">
          <span className="code-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="code-file">
            <i className="bi bi-filetype-js" aria-hidden="true" />
            {code.file}
          </span>
        </div>

        <div className="code-body" role="img" aria-label={t.hero.codeAria}>
          <CodeLine>
            <span className="tok-key">const</span> <span className="tok-var">dev</span>{" "}
            <span className="tok-op">=</span> <span className="tok-punc">{"{"}</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="tok-prop">name</span>
            <span className="tok-punc">:</span> <span className="tok-str">"{site.name}"</span>
            <span className="tok-punc">,</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="tok-prop">role</span>
            <span className="tok-punc">:</span> <span className="tok-str">"{code.role}"</span>
            <span className="tok-punc">,</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="tok-prop">stack</span>
            <span className="tok-punc">:</span> <span className="tok-punc">[</span>
            <span className="tok-str">"React"</span>
            <span className="tok-punc">,</span> <span className="tok-str">"Node.js"</span>
            <span className="tok-punc">,</span> <span className="tok-str">"MongoDB"</span>
            <span className="tok-punc">]</span>
            <span className="tok-punc">,</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="tok-prop">focus</span>
            <span className="tok-punc">:</span> <span className="tok-str">"{code.focus}"</span>
            <span className="tok-punc">,</span>
          </CodeLine>
          <CodeLine indent={1}>
            <span className="tok-prop">available</span>
            <span className="tok-punc">:</span> <span className="tok-bool">true</span>
            <span className="tok-punc">,</span>
          </CodeLine>
          <CodeLine>
            <span className="tok-punc">{"};"}</span>
          </CodeLine>
        </div>
      </div>

      <div className="code-float">
        <i className="bi bi-geo-alt" aria-hidden="true" />
        {site.location}
      </div>

      <div className="code-badges">
        {t.hero.codeBadges.map((badge, index) => (
          <span className="chip" key={badge} style={{ animationDelay: `${index * 60}ms` }}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal>
              <span className="badge-available">
                <span className="pulse-dot" aria-hidden="true" />
                {t.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <div className="hero-kicker">
                <ProfilePhoto className="hero-avatar" />
                <p>
                  {t.hero.greeting} <strong>{site.displayName}</strong>
                  <span className="hero-role"> · {t.hero.role}</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="hero-title">
                {t.hero.title}{" "}
                <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="hero-text">{t.hero.text}</p>
            </Reveal>

            <Reveal delay={260}>
              <div className="hero-actions">
                <a className="btn btn-brand" href="#contact">
                  {t.hero.primary}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
                <a className="btn btn-ghost" href="#skills">
                  {t.hero.secondary}
                </a>
                <a className="resume-link" href={site.cv} target="_blank" rel="noreferrer">
                  <i className="bi bi-download" aria-hidden="true" />
                  {t.hero.resume}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="hero-stats">
                {t.hero.stats.map((stat) => (
                  <div className="hero-stat" key={stat.value}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal delay={180} className="d-flex justify-content-lg-end">
              <CodeWindow />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
