import { screen, render, fireEvent } from "@testing-library/react";
import MyForm from "./Form";
import * as ReactRouter from "react-router";
import * as LangCtx from "../../store/LangContext";
import * as LoginCtx from "../../store/LoggedInContext";
import { type LangContextValue } from "../../store/LangContext";
import {
  LoginCtxMock,
  LangCtxMock,
  UseActionDataMock,
  submitMock,
} from "../../Mocks";

vi.spyOn(LangCtx, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);
vi.spyOn(ReactRouter, "useSubmit").mockReturnValue(submitMock);
vi.spyOn(ReactRouter, "useNavigate").mockReturnValue(vi.fn());
vi.spyOn(LoginCtx, "useLoginContext").mockReturnValue(LoginCtxMock);
vi.spyOn(ReactRouter, "useActionData").mockReturnValue(UseActionDataMock);

const routes = [
  {
    path: "/",
    element: <MyForm />,
  },
];
const router = ReactRouter.createMemoryRouter(routes);

describe("Form component", () => {
  beforeEach(() => {
    render(<ReactRouter.RouterProvider router={router} />);
  });
  test("Render Form Component", () => {
    const form = screen.getByTestId("my-form");
    expect(form).toBeInTheDocument();
  });
  test("Calls Login when Login Button is clicked", () => {
    const loginBtn = screen.getByTestId("loginBtn");
    fireEvent.click(loginBtn);
    expect(submitMock).toHaveBeenCalled();
  });
});
