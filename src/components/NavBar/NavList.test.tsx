import { screen, render } from "@testing-library/react";
import NavList from "./NavList";
import * as LangCtx from "../../store/LangContext";
import type { LangContextValue } from "../../store/LangContext";
import { LangCtxMock, categoriesMock } from "../../Mocks";
import { MemoryRouter } from "react-router";

vi.spyOn(LangCtx, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);

describe("Nav list", () => [
  render(
    <MemoryRouter>
      <NavList categories={categoriesMock} mode="nav-bar" />
    </MemoryRouter>
  ),
  test("Renders NavList", () => {
    const navList = screen.getByRole("list");
    expect(navList).toBeInTheDocument();
  }),
]);
