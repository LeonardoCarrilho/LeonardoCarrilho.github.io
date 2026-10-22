import { initials, site, whatsappLink } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";

const NAV_ITEMS = ["about", "skills", "services", "education", "projects", "contact"];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const githubLabel = site.github
    ? site.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
    : "";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <a className="footer-brand" href="#top">
              <span className="brand-mark" aria-hidden="true">
                {initials}
              </span>
              <span>{site.displayName}</span>
            </a>
            <p className="footer-tagline">{t.footer.tagline}</p>

            <div className="footer-socials">
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              {site.github && (
                <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bi bi-github" aria-hidden="true" />
                </a>
              )}
              <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
              <a href={`mailto:${site.email}`} aria-label="E-mail">
                <i className="bi bi-envelope" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h3 className="footer-title">{t.footer.navTitle}</h3>
            <ul className="footer-links">
              {NAV_ITEMS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>{t.nav[id]}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-4">
            <h3 className="footer-title">{t.footer.contactTitle}</h3>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.github && (
                <li>
                  <a href={site.github} target="_blank" rel="noreferrer">
                    {githubLabel}
                  </a>
                </li>
              )}
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/leonardo-fernandes-carrilho
                </a>
              </li>
              <li>
                <a href={site.cv} target="_blank" rel="noreferrer">
                  {t.hero.resume}
                </a>
              </li>
              <li className="footer-location">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. {t.footer.rights}
          </span>
          <span>{t.footer.built}</span>
          <a className="back-top" href="#top" aria-label="Voltar ao topo">
            <i className="bi bi-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
