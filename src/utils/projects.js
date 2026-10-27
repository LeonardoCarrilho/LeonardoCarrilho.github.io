export function projectCategory(project) {
  if (project.id.startsWith("api-")) return "api";
  return project.id === "helpdesk-fullstack" ? "fullstack" : "interface";
}
export function filterProjects(projects, category) {
  return category === "all" ? projects : projects.filter(project => projectCategory(project) === category);
}
