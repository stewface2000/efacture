"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Locale, getTranslation } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    setLocaleState(newLocale);
    window.location.reload();
  };

  const t = useCallback((key: string) => {
    return getTranslation(key, locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
