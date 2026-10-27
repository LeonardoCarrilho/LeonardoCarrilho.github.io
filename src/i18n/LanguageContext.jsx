import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";
import { readLanguage, saveLanguage } from "./storage.js";

const LanguageContext = createContext(null);


function getInitialLanguage() {
  if (typeof window === "undefined") return "pt";
  try { return readLanguage(window.localStorage); } catch { return "pt"; }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    const dictionary = translations[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = dictionary.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.meta.description);

    try { saveLanguage(window.localStorage, lang); } catch { /* Storage can be disabled. */ }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === "pt" ? "en" : "pt"));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLanguage,
      t: translations[lang],
      isPortuguese: lang === "pt",
    }),
    [lang, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de <LanguageProvider>.");
  }
  return context;
}
