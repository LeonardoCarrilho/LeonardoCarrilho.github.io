import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section section-soft" id="skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.skills.eyebrow}</span>
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-text">{t.skills.text}</p>
          </Reveal>
        </div>

        <div className="row g-4">
          {t.skills.groups.map((group, index) => (
            <div className="col-md-6 col-lg-3" key={group.title}>
              <Reveal delay={index * 80} className="h-100">
                <article className="skill-card h-100">
                  <span className="icon-box" aria-hidden="true">
                    <i className={`bi ${group.icon}`} />
                  </span>
                  <h3>{group.title}</h3>
                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
