import { screen, render } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { MemoryRouter } from "react-router";

describe("Error Page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
  });

  test("Renders ERROR header", () => {
    const errorHeader = screen.getByRole("heading");
    expect(errorHeader).toBeInTheDocument();
  });
  test("Renders error message paragraph", () => {
    const errorParagraph = screen.getByTestId("error-par");
    expect(errorParagraph).toBeInTheDocument();
  });
  test("Renders things-to-check-for list", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
  test("Renders list items", () => {
    const listItem = screen.getAllByRole("listitem");
    expect(listItem).toHaveLength(3);
  });
  test("Renders advice message paragraph", () => {
    const adviceParagraph = screen.getByTestId("advice-par");
    expect(adviceParagraph).toBeInTheDocument();
  });
  test("Renders Link element", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
