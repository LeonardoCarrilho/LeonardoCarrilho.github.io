export function projectCategory(project) {
  if (project.id.startsWith("api-")) return "api";
  return ["helpdesk-fullstack", "sistema-compras"].includes(project.id) ? "fullstack" : "interface";
}
export function filterProjects(projects, category) {
  return category === "all" ? projects : projects.filter(project => projectCategory(project) === category);
}
