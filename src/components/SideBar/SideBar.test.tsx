import { screen, render, fireEvent } from "@testing-library/react";
import SideBar from "./SideBar";
import { MemoryRouter } from "react-router";
import { categoriesMock } from "../../Mocks";
const closeMock = vi.fn();
describe("sidebar", () => {
  test("Renders sidebar", () => {
    render(
      <MemoryRouter>
        <SideBar
          categories={categoriesMock}
          sideBarStatus="block"
          mode="side-bar"
          close={closeMock}
        />
      </MemoryRouter>
    );
    const sidebar = screen.getByRole("sidebar");
    fireEvent.mouseLeave(sidebar);
    expect(closeMock).toHaveBeenCalled();
  });
});
