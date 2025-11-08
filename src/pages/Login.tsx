import { Link } from "react-router";
import MyForm from "../components/Form";
import { useLanguageContext } from "../store/LangContext";
const Login = () => {
  const { language } = useLanguageContext();
  return (
    <main className="auth-form" dir={language === "EN" ? "ltr" : "rtl"}>
      <h2 className="auth-header">
        {language === "EN"
          ? "It's good to see you again"
          : "من الجيد رؤيتك مجددا"}
      </h2>
      <MyForm mode="login" />
      <p className="text-cyan-600 ">
        {language === "EN" ? "Dont have an account?" : "ليس لديك حساب؟"}
        <span className="auth-mode-director">
          <Link to={"/signup"}>
            {language === "EN" ? "Sign up" : "سجل الان "}
          </Link>
        </span>
      </p>
    </main>
  );
};

export default Login;
