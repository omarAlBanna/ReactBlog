import { screen, render } from "@testing-library/react";
import * as LangCtx from "../../../store/LangContext";
import { LangCtxMock } from "../../../Mocks";
import type { LangContextValue } from "../../../store/LangContext";
import { createMemoryRouter, RouterProvider } from "react-router";
import SignUpPage from "../signup/SignupPage";
vi.spyOn(LangCtx, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);

describe("Login page", () => {
  const routes = [{ path: "/", element: <SignUpPage /> }];
  const router = createMemoryRouter(routes);
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });
  test(`Renders Signup Header`, () => {
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });
  test("Renders custom Form Element", () => {
    const myForm = screen.getByTestId("my-form");
    expect(myForm).toBeInTheDocument();
  });
  test(`Renders signup CTA paragraph`, () => {
    const ctaParagraph = screen.getByRole("paragraph");
    expect(ctaParagraph).toBeInTheDocument();
  });
  test(`Renders signup CTA link`, () => {
    const ctaLink = screen.getByRole("link");
    expect(ctaLink).toBeInTheDocument();
  });
});
