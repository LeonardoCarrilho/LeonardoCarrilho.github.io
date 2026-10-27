export const LANGUAGE_KEY = "landing-language";
export function readLanguage(storage) {
  try {
    const saved = storage.getItem(LANGUAGE_KEY);
    return saved === "en" ? "en" : "pt";
  } catch { return "pt"; }
}
export function saveLanguage(storage, language) {
  try { storage.setItem(LANGUAGE_KEY, language); return true; }
  catch { return false; }
}
