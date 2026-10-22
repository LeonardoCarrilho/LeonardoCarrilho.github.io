import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-text">{t.services.text}</p>
          </Reveal>
        </div>

        <div className="row g-4">
          {t.services.items.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <Reveal delay={index * 70} className="h-100">
                <article className="service-card h-100">
                  <span className="icon-box" aria-hidden="true">
                    <i className={`bi ${item.icon}`} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="process">
          <Reveal>
            <span className="eyebrow">{t.process.eyebrow}</span>
            <h2 className="section-title section-title-sm">{t.process.title}</h2>
          </Reveal>

          <div className="row g-4 mt-1">
            {t.process.steps.map((step, index) => (
              <div className="col-sm-6 col-lg-3" key={step.title}>
                <Reveal delay={index * 70}>
                  <div className="step">
                    <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
