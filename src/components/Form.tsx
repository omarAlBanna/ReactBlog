import { type FC } from "react";
import { useLanguageContext } from "../store/LangContext";
import { Form, redirect, type ActionFunctionArgs } from "react-router";
type FormProps = {
  mode: "login" | "signup";
};

const MyForm: FC<FormProps> = ({ mode }) => {
  const { language } = useLanguageContext();
  return (
    <Form
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
      <button
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
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    throw new Error("all fields are required to fill");
  }
  return redirect("/");
}
