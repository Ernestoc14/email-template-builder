"use client";
import { createContext, useContext, useState } from "react";

interface LanguageContextProps {
  language: "ES" | "EN" | "PT" | "FR";
  setLanguage: (language: "ES" | "EN" | "PT" | "FR") => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<"ES" | "EN" | "PT" | "FR">("ES");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext) as LanguageContextProps;
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
