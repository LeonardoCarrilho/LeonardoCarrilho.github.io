import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";
const port = 4317, base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], { stdio: "pipe" });
let browser;
try {
 let ready = false;
 for (let i = 0; i < 600; i++) { try { if ((await fetch(base, { signal: AbortSignal.timeout(1000) })).ok) { ready = true; break; } } catch {} await delay(100); }
 assert.ok(ready, "Preview server must start");
 browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) });
 const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
 const errors = []; page.on("pageerror", e => errors.push(e.message));
 await page.goto(base);
 assert.equal(await page.locator("#projects article").count(), 7);
 assert.equal(await page.locator(".p-portrait img").count(), 0);
 for (const img of await page.locator(".p-project-visual img").all()) { await img.scrollIntoViewIfNeeded(); await img.evaluate(image => image.decode()); assert.ok(await img.evaluate(image => image.naturalWidth > 0)); }
 await page.getByRole("button", { name: "EN", exact: true }).click();
 assert.equal(await page.locator("html").getAttribute("lang"), "en");
 assert.match(await page.locator("h1").innerText(), /Full stack/);
 await page.getByRole("button", { name: "PT", exact: true }).click();
 assert.equal(await page.locator("html").getAttribute("lang"), "pt-BR");
 for (const width of [320,390,768,1440]) { await page.setViewportSize({ width, height: 900 }); assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}px`); assert.ok(await page.getByRole("link", { name: "Projetos", exact: true }).isVisible()); }
 assert.deepEqual(errors, []);
 console.log("Browser checks passed: projects, images, language, navigation and responsive widths.");
} finally { await browser?.close(); const exited = once(server, "exit"); server.kill(); await exited; }
