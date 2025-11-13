import { type FC } from "react";
import { type NavBarProps } from "../NavBar/Navbar";
import NavList from "../NavBar/NavList";

const SideBar: FC<NavBarProps> = ({
  categories,
  mode,
  sideBarStatus,
  close,
}) => {
  return (
    <aside
      role="sidebar"
      onMouseLeave={close}
      className={`${sideBarStatus} side-bar absolute top-0 bottom-0 py-2 z-50 w-1/4   bg-stone-200 shadow-lg shadow-stone-400 `}
    >
      <NavList mode={mode} categories={categories} />
    </aside>
  );
};

export default SideBar;
