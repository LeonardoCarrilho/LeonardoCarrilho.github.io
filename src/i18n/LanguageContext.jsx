import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "landing-language";

function getInitialLanguage() {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  // Idioma padrão do site: português. Troque para "en" se preferir.
  return "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    const dictionary = translations[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = dictionary.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.meta.description);

    window.localStorage.setItem(STORAGE_KEY, lang);
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
