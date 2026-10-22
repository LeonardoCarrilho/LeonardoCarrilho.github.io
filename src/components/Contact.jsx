import { useRef, useState } from "react";
import { site, whatsappLink } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const socials = [
  site.linkedin && { icon: "bi-linkedin", label: "LinkedIn", href: site.linkedin },
  site.github && { icon: "bi-github", label: "GitHub", href: site.github },
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    href: whatsappLink,
    display: site.whatsappDisplay || site.whatsapp,
  },
].filter(Boolean);

export default function Contact() {
  const { t, isPortuguese } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const subject = isPortuguese
      ? `Contato pelo site — ${company || name}`
      : `Website contact — ${company || name}`;

    const body = [
      message,
      "",
      isPortuguese ? `Nome: ${name}` : `Name: ${name}`,
      company ? (isPortuguese ? `Empresa: ${company}` : `Company: ${company}`) : "",
      isPortuguese ? `E-mail para retorno: ${email}` : `Reply to: ${email}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus(t.contact.form.success);
    event.currentTarget.reset();
  };

  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <Reveal>
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-text">{t.contact.text}</p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <i className="bi bi-envelope" />
                  </span>
                  <div className="contact-info">
                    <span className="contact-label">{t.contact.emailLabel}</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                  <button type="button" className="copy-btn" onClick={copyEmail}>
                    <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"}`} aria-hidden="true" />
                    <span>{copied ? t.contact.form.copied : t.contact.form.copy}</span>
                  </button>
                </li>

                {socials.map((social) => (
                  <li key={social.label}>
                    <span className="contact-icon" aria-hidden="true">
                      <i className={`bi ${social.icon}`} />
                    </span>
                    <div className="contact-info">
                      <span className="contact-label">{social.label}</span>
                      <a href={social.href} target="_blank" rel="noreferrer">
                        {social.display ||
                          social.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </a>
                    </div>
                    <i className="bi bi-arrow-up-right contact-arrow" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <p className="contact-note">
                <i className="bi bi-briefcase" aria-hidden="true" />
                {t.hero.availability}
              </p>
              <p className="contact-note">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                {site.location}
              </p>
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal delay={160}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="name">
                      {t.contact.form.name}
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="company">
                      {t.contact.form.company}
                    </label>
                    <input
                      className="form-control"
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      {t.contact.form.email}
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder={t.contact.form.messagePlaceholder}
                      required
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <button type="submit" className="btn btn-brand">
                    {t.contact.form.submit}
                    <i className="bi bi-send" aria-hidden="true" />
                  </button>
                  <span className="form-helper">{t.contact.form.helper}</span>
                </div>

                <p className="form-privacy">{t.contact.form.privacy}</p>

                <div className="form-status" role="status" aria-live="polite">
                  {status}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
