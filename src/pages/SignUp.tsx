import SignUpPage from "../components/auth/signup/SignupPage";
import { useLanguageContext } from "../store/LangContext";

const SignUp = () => {
  const { language } = useLanguageContext();
  return (
    <main className="auth-form" dir={language === "EN" ? "ltr" : "rtl"}>
      <SignUpPage />
    </main>
  );
};

export default SignUp;
