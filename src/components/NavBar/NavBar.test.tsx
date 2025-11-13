import { screen, render, fireEvent, within } from "@testing-library/react";
import Navbar from "./Navbar";
import * as langCtx from "../../store/LangContext";
import type { LangContextValue } from "../../store/LangContext";
import * as LoginCtx from "../../store/LoggedInContext";
import { MemoryRouter } from "react-router";
import { categoriesMock, LangCtxMock, LoginCtxMock } from "../../Mocks";

vi.spyOn(LoginCtx, "useLoginContext").mockReturnValue(LoginCtxMock);
vi.spyOn(langCtx, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);
const mockFn = vi.fn();
describe("Navigation bar tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar categories={categoriesMock} mode="nav-bar" open={mockFn} />
      </MemoryRouter>
    );
  });
  test("Renders navbar elements", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const nav = within(header).getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const navList = within(nav).getByRole("list");
    expect(navList).toBeInTheDocument();

    const div = within(nav).getByRole("div");
    expect(div).toBeInTheDocument();
  });

  test("Renders hamburger menu and opens sidebar when clicked", () => {
    const btn = screen.getByTestId("open-sideBar");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalled();
  });

  test("Renders a button that toggles app language when clicked", () => {
    const langBtn = screen.getByTestId("langToggle");
    fireEvent.click(langBtn);
    expect(LangCtxMock.toggleLang).toHaveBeenCalled();
  });

  test("Renders a button that loggs the user out when clciked", () => {
    if (LoginCtxMock.loggedIn) {
      const logout = screen.getByTestId("logout");
      fireEvent.click(logout);
      expect(LoginCtxMock.LogOut).toHaveBeenCalled();
    } else {
      const loginAnchor = screen.getByTestId("anchor");
      expect(loginAnchor).toBeInTheDocument();
    }
  });
});
