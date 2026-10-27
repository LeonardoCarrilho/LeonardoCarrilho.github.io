import { useEffect, useRef, useState } from "react";
import { initials, site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";

const SECTION_IDS = ["about", "skills", "services", "education", "projects", "contact"];

export default function Navbar() {
  const toggleRef = useRef(null);
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const marker = window.scrollY + 140;
      let current = "";
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar container navbar-expand-lg" aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}>
        <a className="navbar-brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-name">{site.displayName}</span>
        </a>

        <div className="nav-actions order-lg-3">
          <div className="lang-switch" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className={lang === "pt" ? "is-active" : ""}
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            ref={toggleRef}
            className="nav-toggle d-lg-none"
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={lang === "pt" ? (open ? "Fechar menu" : "Abrir menu") : (open ? "Close menu" : "Open menu")}
            onClick={() => setOpen((value) => !value)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" />
          </button>
        </div>

        <div id="main-menu" className={`collapse navbar-collapse order-lg-2 ${open ? "show" : ""}`}>
          <ul className="navbar-nav main-menu mx-lg-auto">
            {SECTION_IDS.map((id) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link ${active === id ? "is-active" : ""}`}
                  aria-current={active === id ? "location" : undefined}
                  href={`#${id}`}
                  onClick={closeMenu}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          <a className="btn btn-brand btn-sm nav-cta" href="#contact" onClick={closeMenu}>
            {t.navCta}
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
