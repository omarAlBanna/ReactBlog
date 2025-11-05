import {
  useState,
  createContext,
  useContext,
  useEffect,
  type FC,
  type ReactNode,
} from "react";

type ProviderProps = {
  children: ReactNode;
};
type LangContextValue = {
  language: "EN" | "AR";
  toggleLang: () => void;
  loading: boolean;
};

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

const LangContextProvider: FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "EN" | "AR" | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
    setLoading(false);
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
    loading,
  };
  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

export default LangContextProvider;
