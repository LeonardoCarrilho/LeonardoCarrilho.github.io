import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <div className="cta-symbol" aria-hidden="true"><i className="bi bi-arrow-up-right" /></div>
            <div className="cta-content">
              <h2 id="cta-title">{t.cta.title}</h2>
              <p>{t.cta.text}</p>
            </div>
            <div className="cta-action">
              <a className="btn btn-light btn-lg" href="#contact">
                {t.cta.button}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
              <span className="cta-note">
                <i className="bi bi-chat-dots" aria-hidden="true" />
                {t.cta.note}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
