import {
  useState,
  createContext,
  useContext,
  type FC,
  type ReactNode,
} from "react";

type ProviderProps = {
  children: ReactNode;
};
type LangContextValue = {
  language: "EN" | "AR";
  toggleLang: () => void;
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
  const toggleLang = () => {
    setLanguage((prev) => {
      return prev === "EN" ? "AR" : "EN";
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
