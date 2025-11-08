import {
  type ReactNode,
  type FC,
  createContext,
  useState,
  useContext,
} from "react";

type CtxProviderProps = {
  children: ReactNode;
};
const LoggedInCtx = createContext({
  loggedIn: false,
  LogIn: () => {},
  LogOut: () => {},
});
export const useLoginContext = () => {
  const ctx = useContext(LoggedInCtx);
  if (!ctx) {
    throw new Error("An error occured, please try again later.");
  }
  return ctx;
};
const LoggedInCtxProvider: FC<CtxProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  function LogIn() {
    setLoggedIn(true);
  }
  function LogOut() {
    setLoggedIn(false);
  }
  const CtxValue = { loggedIn, LogIn, LogOut };
  return (
    <LoggedInCtx.Provider value={CtxValue}>{children}</LoggedInCtx.Provider>
  );
};

export default LoggedInCtxProvider;
