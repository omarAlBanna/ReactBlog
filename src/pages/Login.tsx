import LoginPage from "../components/auth/login/LoginPage";
import { useLanguageContext } from "../store/LangContext";
const Login = () => {
  const { language } = useLanguageContext();
  return (
    <main className="auth-form" dir={language === "EN" ? "ltr" : "rtl"}>
      <LoginPage />
    </main>
  );
};

export default Login;
