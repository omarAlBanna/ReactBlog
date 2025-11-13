import { Link } from "react-router";
import MyForm from "../../form/Form";
import { useLanguageContext } from "../../../store/LangContext";
const SignUpPage = () => {
  const { language } = useLanguageContext();
  return (
    <>
      <h2 className="auth-header">
        {language === "EN"
          ? "Your Bloggin journey starts today"
          : "رحلتك في عالم المقالات تبدا اليوم"}
      </h2>
      <MyForm mode="login" />
      <p className="text-cyan-600 ">
        {language === "EN" ? "already have an account?" : "لديك حساب"}
        <span className="auth-mode-director">
          <Link to={"/login"}>{language === "EN" ? "Login" : "ادخل الان"}</Link>
        </span>
      </p>
    </>
  );
};

export default SignUpPage;
