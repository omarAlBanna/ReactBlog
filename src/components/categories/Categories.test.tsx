import Categories from "../../pages/Categories";
import { screen, render } from "@testing-library/react";
import * as ReactRouter from "react-router";
import * as LangContext from "../../store/LangContext";
import { MemoryRouter } from "react-router";
import { dataMock, LangCtxMock } from "../../Mocks";
import type { LangContextValue } from "../../store/LangContext";

vi.spyOn(LangContext, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);

vi.spyOn(ReactRouter, "useParams").mockReturnValue({ category: "sports" });

vi.spyOn(ReactRouter, "useRouteLoaderData").mockReturnValue(dataMock);

describe("Categories dynamic page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );
  });

  test("Render Categories header", () => {
    const categoryHeader = screen.getByRole("heading");
    expect(categoryHeader).toBeInTheDocument();
  });
  test("Render Categories Images", () => {
    const categoryImages = screen.getAllByRole("img");
    expect(categoryImages).toHaveLength(3);
  });
  test("Render Categories Links", () => {
    const categoryLinks = screen.getAllByRole("img");
    expect(categoryLinks).toHaveLength(3);
  });
});
