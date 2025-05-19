import { NavLink } from "react-router-dom";

type TNavbarProps = {
  isOpen: boolean;
};

const Navbar: React.FC<TNavbarProps> = ({ isOpen }) => {
  return (
    <nav
      aria-label="Main navigation"
      id="main-menu"
      className={`bg-black absolute transition-all w-full ease-in-out -bottom-[123%] ${
        isOpen ? "left-0" : "-left-full"
      }  lg:static lg:bottom-auto lg:left-auto lg:w-fit lg:`}
    >
      <ul className="flex flex-col gap-4 p-4 lg:pb-0 lg:flex-row bg-white text-black">
        <li>
          <NavLink to={"/"} className="font-thin nav-link lg:text-2xl">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="font-thin nav-link lg:text-2xl">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="font-thin nav-link lg:text-2xl">
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
