import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const port = 4317;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], { stdio: "pipe" });
let browser;
try {
 let ready = false;
 for (let attempt = 0; attempt < 60; attempt++) {
  try { if ((await fetch(base)).ok) { ready = true; break; } } catch {}
  await delay(100);
 }
 assert.ok(ready, "Preview server must start");
 browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) });
 const errors = [];
 const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
 page.on("pageerror", error => errors.push(error.message));
 await page.goto(base);
 await page.locator("#intro-title").waitFor();
 assert.equal(await page.locator("#projects").count(), 1);
 assert.equal(await page.locator(".project-card").count(), 8);
 assert.deepEqual(await page.locator("[id]").evaluateAll(nodes => {
  const ids = nodes.map(node => node.id); return ids.filter((id, i) => ids.indexOf(id) !== i);
 }), [], "IDs must be unique");
 await page.getByRole("button", { name: "APIs", exact: true }).click();
 assert.equal(await page.locator(".project-card").count(), 2);
 await page.getByRole("button", { name: "Full Stack", exact: true }).click();
 assert.equal(await page.locator(".project-card").count(), 1);
 await page.getByRole("button", { name: "Interfaces", exact: true }).click();
 assert.equal(await page.locator(".project-card").count(), 5);
 await page.getByRole("button", { name: "Todos", exact: true }).click();
 for (const img of await page.locator(".project-preview img").all()) {
  await img.scrollIntoViewIfNeeded();
  await img.evaluate(image => image.decode());
  assert.ok(await img.evaluate(image => image.naturalWidth > 0));
 }
 await page.getByRole("button", { name: "EN", exact: true }).click();
 assert.equal(await page.locator("html").getAttribute("lang"), "en");
 await page.reload();
 await page.locator("#intro-title").waitFor();
 assert.match(await page.locator("#intro-title").innerText(), /Clear ideas/);
 for (const width of [320, 390, 768, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}px`);
 }
 await page.setViewportSize({ width: 390, height: 844 });
 const toggle = page.getByRole("button", { name: "Open menu", exact: true });
 await toggle.click();
 await page.locator("#main-menu a").first().focus();
 await page.keyboard.press("Escape");
 assert.equal(await toggle.getAttribute("aria-expanded"), "false");
 assert.ok(await toggle.evaluate(el => el === document.activeElement));

 const blocked = await browser.newPage();
 blocked.on("pageerror", error => errors.push(error.message));
 await blocked.addInitScript(() => Object.defineProperty(window, "localStorage", { get() { throw new DOMException("Blocked", "SecurityError"); } }));
 await blocked.goto(base);
 await blocked.locator("#intro-title").waitFor();
 await blocked.getByRole("button", { name: "EN", exact: true }).click();
 assert.equal(await blocked.locator("html").getAttribute("lang"), "en");
 await blocked.reload();
 await blocked.locator("#intro-title").waitFor();
 assert.equal(await blocked.locator("html").getAttribute("lang"), "pt-BR");
 assert.deepEqual(errors, []);
 console.log("Browser checks passed: filters, images, languages, blocked storage, keyboard focus and four viewport sizes.");
} finally {
 await browser?.close();
 const exited = once(server, "exit");
 server.kill();
 await exited;
}
