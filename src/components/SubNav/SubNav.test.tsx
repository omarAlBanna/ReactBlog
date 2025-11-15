import { screen, render, within } from "@testing-library/react";
import SubNav from "./SubNav";
import * as reactRouter from "react-router";
import * as langCtx from "../../store/LangContext";
import type { LangContextValue } from "../../store/LangContext";
import { dataMock, LangCtxMock } from "../../Mocks";

vi.spyOn(langCtx, "useLanguageContext").mockReturnValue(
  LangCtxMock as LangContextValue
);
vi.spyOn(reactRouter, "useRouteLoaderData").mockReturnValue(dataMock);
vi.spyOn(reactRouter, "useParams").mockReturnValue({
  category: "sports",
  sub: "football",
});
const loaderData = dataMock;
const router = reactRouter.createMemoryRouter(
  [
    {
      path: "/:category",
      element: <SubNav />,
      loader: () => loaderData,
    },
  ],
  { initialEntries: ["/:category"] }
);

describe("sub categories navbar", () => {
  test("renders header, nav, and Ul elements", () => {
    render(<reactRouter.RouterProvider router={router} />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const nav = within(header).getByRole("navigation");
    expect(nav).toBeInTheDocument();

    const list = within(nav).getByRole("list");
    expect(list).toBeInTheDocument();

    const items = within(list).getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(1);

    items.map((item) => {
      const link = within(item).getByRole("link");
      expect(link).toBeInTheDocument();
    });
  });
});
