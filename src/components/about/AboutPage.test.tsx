import { screen, render } from "@testing-library/react";
import AboutPage from "./AboutPage";
import { MemoryRouter } from "react-router";

describe("About page", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
  });

  test("Renders about page header", () => {
    const aboutHeader = screen.getByRole("heading");
    expect(aboutHeader).toBeInTheDocument();
  });

  test("Renders about us paragraph", () => {
    const aboutParagraph = screen.getByRole("paragraph");
    expect(aboutParagraph).toBeInTheDocument();
  });

  test("Renders about page image", () => {
    const aboutImg = screen.getByRole("img");
    expect(aboutImg).toBeInTheDocument();
  });

  test("Renders get started link", () => {
    const getStartedLink = screen.getByRole("link");
    expect(getStartedLink).toBeInTheDocument();
  });
});
