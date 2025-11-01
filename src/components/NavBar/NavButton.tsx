import { type FC, type ReactNode } from "react";

type NavBtnProps = {
  children: ReactNode;
};

const NavButton: FC<NavBtnProps> = ({ children }) => {
  return (
    <li className="nav-link">
      <a>{children}</a>
    </li>
  );
};

export default NavButton;
