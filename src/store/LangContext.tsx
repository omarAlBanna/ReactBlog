import {
  useState,
  createContext,
  useContext,
  useEffect,
  type FC,
  type ReactNode,
} from "react";

const LangContext = createContext({
  language: "EN",
  toggleLang: () => {},
});

export function useLanguageContext() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("Failed to determine page language.");
  } else {
    return ctx as LangContextValue;
  }
}

type ProviderProps = {
  children: ReactNode;
};
export type LangContextValue = {
  language: "EN" | "AR";
  toggleLang: () => void;
};

const LangContextProvider: FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "EN" | "AR" | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLang = () => {
    setLanguage((prev) => {
      const newLang = prev === "EN" ? "AR" : "EN";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  const contextValue: LangContextValue = {
    language: language,
    toggleLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export default LangContextProvider;
