import { site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import ProfilePhoto from "./ProfilePhoto";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-7">
            <Reveal>
              <span className="eyebrow">{t.about.eyebrow}</span>
              <h2 className="section-title">{t.about.title}</h2>
            </Reveal>

            {t.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={80 + index * 60}>
                <p className="section-text">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <h3 className="subsection-title">{t.about.expectationsTitle}</h3>
              <ul className="check-list">
                {t.about.expectations.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal delay={160}>
              <aside className="profile-card">
                <div className="profile-top">
                  <ProfilePhoto className="profile-photo" />
                  <div className="profile-head">
                    <strong>{site.name}</strong>
                    <span>{t.hero.role}</span>
                    <span className="profile-status">
                      <span className="pulse-dot" aria-hidden="true" />
                      {t.about.available}
                    </span>
                  </div>
                </div>

                <div className="profile-body">
                  <h3 className="fact-title">{t.about.factsTitle}</h3>
                  <dl className="fact-list">
                    {t.about.facts.map((fact) => (
                      <div className="fact-row" key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="profile-foot">
                    <a href={site.linkedin} target="_blank" rel="noreferrer">
                      <i className="bi bi-linkedin" aria-hidden="true" />
                      LinkedIn
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </a>
                    <span className="profile-loc">
                      <i className="bi bi-geo-alt" aria-hidden="true" />
                      {site.location}
                    </span>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
