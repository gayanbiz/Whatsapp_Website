"use client";

import { useCallback, useEffect, useState } from "react";
import { translations, type TranslationKeys } from "./translations";

type Language = "si" | "en";

const LANGUAGE_STORAGE_KEY = "wpm_lang";

type UseLanguageResult = {
  lang: Language;
  setLang: (nextLang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
};

export function useLanguage(): UseLanguageResult {
  const [lang, setLangState] = useState<Language>("si");

  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLang === "si" || savedLang === "en") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
  }, []);

  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      return JSON.stringify(translations[lang][key]);
    },
    [lang],
  );

  return { lang, setLang, t };
}
