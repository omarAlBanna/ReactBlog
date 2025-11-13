import { screen, render } from "@testing-library/react";
import NavButton from "./NavButton";
import { MemoryRouter } from "react-router";

describe("NavButton", () => {
  render(
    <MemoryRouter>
      <NavButton to="/" className="testClass" mode="nav-bar">
        some link
      </NavButton>
    </MemoryRouter>
  );
  test("NavBtn", () => {
    const NavBtn = screen.getByRole("link");
    expect(NavBtn).toBeInTheDocument();
  });
});
