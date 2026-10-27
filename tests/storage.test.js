import { test } from "node:test";
import assert from "node:assert/strict";
import { readLanguage, saveLanguage, LANGUAGE_KEY } from "../src/i18n/storage.js";
test("falls back to Portuguese for missing and invalid values", () => {
  for (const value of [null, "", "es", "invalid"]) assert.equal(readLanguage({ getItem: () => value }), "pt");
});
test("restores English and persists a choice", () => {
  const map = new Map([[LANGUAGE_KEY, "en"]]);
  const storage = { getItem: key => map.get(key), setItem: (key, value) => map.set(key, value) };
  assert.equal(readLanguage(storage), "en");
  assert.equal(saveLanguage(storage, "pt"), true);
  assert.equal(readLanguage(storage), "pt");
});
test("blocked storage never breaks the page", () => {
  const storage = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } };
  assert.equal(readLanguage(storage), "pt");
  assert.equal(saveLanguage(storage, "en"), false);
});
