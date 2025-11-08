import { Link } from "react-router";
import MyForm from "../components/Form";
import { useLanguageContext } from "../store/LangContext";

const SignUp = () => {
  const { language } = useLanguageContext();
  return (
    <main className="auth-form" dir={language === "EN" ? "ltr" : "rtl"}>
      <h2 className="auth-header">
        {language === "EN"
          ? "Your bloggin journey starts today"
          : "رحلتك في عالم المقالات تبدا الان"}
      </h2>
      <MyForm mode="signup" />
      <p className="text-cyan-600 italic">
        {language === "EN" ? "already have an account?" : "لديك حساب؟"}
        <span className="auth-mode-director">
          <Link to={"/login"}>
            {language === "EN" ? "Login" : "تسجيل دخول"}
          </Link>
        </span>
      </p>
    </main>
  );
};

export default SignUp;
