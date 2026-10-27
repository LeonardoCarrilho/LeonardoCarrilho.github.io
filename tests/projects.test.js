import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProjects, projectCategory } from "../src/utils/projects.js";
const projects = [{ id: "api-tarefas" }, { id: "api-financas" }, { id: "helpdesk-fullstack" }, { id: "loja-virtual" }];
test("categories separate APIs, full stack and interfaces", () => {
 assert.deepEqual(projects.map(projectCategory), ["api", "api", "fullstack", "interface"]);
 assert.equal(filterProjects(projects, "api").length, 2);
 assert.deepEqual(filterProjects(projects, "fullstack"), [projects[2]]);
 assert.deepEqual(filterProjects(projects, "interface"), [projects[3]]);
});
test("all projects retain their order and input is not mutated", () => {
 const before = structuredClone(projects);
 assert.deepEqual(filterProjects(projects, "all"), before);
 filterProjects(projects, "api");
 assert.deepEqual(projects, before);
 assert.deepEqual(filterProjects([], "interface"), []);
});
