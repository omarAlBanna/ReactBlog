import { type FC, useRef, useEffect } from "react";
import { useLanguageContext } from "../../store/LangContext";
import { useSubmit, useActionData, useNavigate } from "react-router";
import { Form, type ActionFunctionArgs } from "react-router";
import { useLoginContext } from "../../store/LoggedInContext";

type FormProps = {
  mode?: "login" | "signup";
};

const MyForm: FC<FormProps> = ({ mode }) => {
  const { language } = useLanguageContext();
  const submit = useSubmit();
  const navigate = useNavigate();
  const { LogIn } = useLoginContext();
  const formRef = useRef<HTMLFormElement>(null);
  const actionData = useActionData<{ success: Boolean; error?: string }>();

  useEffect(() => {
    if (actionData?.success) {
      LogIn();
      navigate("/");
    }
  }, [actionData, LogIn]);

  const handleLogin = () => {
    if (formRef.current) {
      submit(formRef.current, { method: "post", action: "/login" });
    }
  };

  return (
    <Form
      data-testid="my-form"
      ref={formRef}
      className="bg-stone-300 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] p-5 rounded-lg flex flex-col items-start gap-6 shadow-stone-400 shadow-lg"
      method="POST"
    >
      <div>
        <label className="login-label" htmlFor="username">
          {language === "EN" ? "username" : "الاسم"}
        </label>
        <br />
        <input
          className="login-input"
          type="text"
          id="username"
          name="username"
          required
        />
      </div>
      <div>
        <label className="login-label" htmlFor="password">
          {language === "EN" ? "password" : "كلمة السر"}
        </label>
        <br />
        <input
          className="login-input"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      {actionData?.error && <p className="auth-error">{actionData.error}</p>}
      <button
        data-testid="loginBtn"
        onClick={handleLogin}
        className={`login-btn ${
          language === "EN" ? "mr-auto" : "ml-auto"
        } text-lg sm:text-xl px-4 sm:px-8`}
      >
        {mode === "login" && language === "EN" && "Login"}
        {mode === "login" && language === "AR" && "دخول"}
        {mode === "signup" && language === "EN" && "Signup"}
        {mode === "signup" && language === "AR" && "اكمل"}
      </button>
    </Form>
  );
};

export default MyForm;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const lang = localStorage.getItem("language");

  if (!username || !password) {
    return lang === "EN"
      ? { error: "All fields are required to be filled." }
      : { error: "يجب تعبئة كافة الحقول المطلوبة." };
  } else if (username.includes(" ") || password.includes(" ")) {
    return lang === "EN"
      ? { error: "username and passwords cannot include spaces." }
      : { error: "حقول الاسم وكلمة السر يجب ان تخلو من المسافات." };
  } else if (username.length < 6 || password.length < 6) {
    return lang === "EN"
      ? {
          error:
            "username and passwords require a minimum length of 6 characters.",
        }
      : { error: "الاسم وكلمة السر يجب ان يتالفوا من ما لا يقل عن ستة رموز." };
  } else if (username.length > 12 || password.length > 12) {
    return lang === "EN"
      ? {
          error: "Username and password lengths cannot exceed 12 characters.",
        }
      : {
          error: "الاسم وكلمة السر لا يمكن ان يتالفوا من اكثر من اثنا عشر رمز.",
        };
  }
  localStorage.setItem("loggedIn", "true");
  return { success: true };
}
