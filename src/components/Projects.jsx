import { useState } from "react";
import { filterProjects } from "../utils/projects.js";
import { site } from "../data/site";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function Projects() {
  const { t, isPortuguese: pt } = useLanguage();
  const [category, setCategory] = useState("all");
  const projects = filterProjects(site.projects, category);
  const filters = [["all", pt ? "Todos" : "All"], ["interface", pt ? "Interfaces" : "Interfaces"], ["api", "APIs"], ["fullstack", "Full Stack"]];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head section-head-row">
          <Reveal>
            <span className="eyebrow">{t.projects.eyebrow}</span>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-text">{t.projects.text}</p>
          </Reveal>

          <Reveal delay={80} className="section-head-action">
            <a className="link-arrow" href={site.github} target="_blank" rel="noreferrer">
              <i className="bi bi-github" aria-hidden="true" />
              {t.projects.all}
            </a>
          </Reveal>
        </div>

        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label={pt ? "Filtrar projetos" : "Filter projects"}>
            {filters.map(([id, label]) => <button type="button" key={id} aria-pressed={category === id} onClick={() => setCategory(id)}>{label}</button>)}
          </div>
          <span className="project-count" role="status">{projects.length} {pt ? "projetos" : "projects"}</span>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => {
            const copy = t.projects.items[project.id];
            const repoName = project.repo.replace(/^https?:\/\/github\.com\//, "");

            return (
              <div className="col-md-6" key={project.id}>
                <Reveal delay={Math.min(index * 40, 160)} className="h-100">
                  <article className="project-card h-100">
                    {project.demo ? (
                      <a className="project-preview" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${t.projects.demo}: ${copy.title}`}>
                        <img src={`${import.meta.env.BASE_URL}projects/${project.id}.jpg`} alt={pt ? `Prévia de ${copy.title}` : `Preview of ${copy.title}`} width="1280" height="820" loading="lazy" decoding="async" />
                      </a>
                    ) : (
                      <div className="project-code-art" aria-hidden="true"><i className="bi bi-braces" /><strong>{project.id === "api-tarefas" ? "tasks / REST" : "finance / REST"}</strong><span>{project.tech.join(" · ")}</span></div>
                    )}
                    <div className="project-top">
                      <span className="project-icon" aria-hidden="true">
                        <i className={`bi ${project.icon}`} />
                      </span>
                      <span className="project-kind">{copy.kind}</span>
                      <span className="project-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{copy.title}</h3>
                    <p className="project-text">{copy.text}</p>

                    <ul className="project-highlights">
                      {copy.highlights.map((highlight) => (
                        <li key={highlight}>
                          <i className="bi bi-check2" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="tag-list project-tags">
                      {project.tech.map((tech) => (
                        <li className="tag" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="project-footer">
                      <a
                        className="project-link"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t.projects.open}: ${copy.title}`}
                      >
                        <span className="project-repo">
                          <i className="bi bi-github" aria-hidden="true" />
                          {repoName}
                        </span>
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                      </a>

                      {project.demo && (
                        <a
                          className="project-demo"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${t.projects.demo}: ${copy.title}`}
                        >
                          {t.projects.demo}
                          <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
