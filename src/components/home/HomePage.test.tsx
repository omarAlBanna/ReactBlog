import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Homepage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  test("Renders Home page image", () => {
    const Image = screen.getByRole("img");
    expect(Image).toBeInTheDocument();
  });

  test("Renders Home page header", () => {
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });

  test("Renders 2 router links", () => {
    const buttons = screen.getAllByRole("link");
    expect(buttons).toHaveLength(2);
  });
});
