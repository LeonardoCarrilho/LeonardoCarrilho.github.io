import { site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLanguage();
  const { graduation, certifications } = t.education;

  return (
    <section className="section section-soft" id="education">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.education.eyebrow}</span>
            <h2 className="section-title">{t.education.title}</h2>
            <p className="section-text">{t.education.text}</p>
          </Reveal>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <Reveal className="h-100">
              <article className="edu-card h-100">
                <span className="icon-box" aria-hidden="true">
                  <i className={`bi ${graduation.icon}`} />
                </span>
                <span className="edu-type">{graduation.type}</span>
                <h3>{graduation.title}</h3>
                <p className="edu-org">{graduation.org}</p>
                <p className="edu-text">{graduation.text}</p>
                <span className="edu-period">
                  <i className="bi bi-calendar3" aria-hidden="true" />
                  {graduation.period}
                </span>
              </article>
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal delay={100} className="h-100">
              <article className="edu-card h-100">
                <span className="icon-box" aria-hidden="true">
                  <i className={`bi ${certifications.icon}`} />
                </span>
                <span className="edu-type">{certifications.type}</span>
                <h3>{certifications.title}</h3>
                <p className="edu-org">{certifications.org}</p>
                <p className="edu-text">{certifications.text}</p>

                <ul className="tag-list edu-tags">
                  {certifications.items.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <a className="link-arrow edu-link" href={site.linkedin} target="_blank" rel="noreferrer">
                  {certifications.cta}
                  <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
