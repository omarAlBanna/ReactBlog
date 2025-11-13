import { screen, render } from "@testing-library/react";
import SubCategories from "../../pages/SubCategories";
import { MemoryRouter } from "react-router";
import * as ReactRouter from "react-router";
import * as LangContext from "../../store/LangContext";
import { dataMock, LangCtxMock } from "../../Mocks";
import { type LangContextValue } from "../../store/LangContext";

vi.spyOn(ReactRouter, "useRouteLoaderData").mockReturnValue(dataMock);

vi.spyOn(ReactRouter, "useParams").mockReturnValue({
  category: "sports",
  sub: "Football",
});

vi.spyOn(LangContext, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);

describe("SubCategories dynamic page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SubCategories />
      </MemoryRouter>
    );
  });

  test("Render Blog Post Component", () => {
    const blogPost = screen.getAllByRole("article");
    expect(blogPost.length).toBeLessThanOrEqual(2);
    expect(blogPost.length).toBeGreaterThanOrEqual(1);
  });
});
