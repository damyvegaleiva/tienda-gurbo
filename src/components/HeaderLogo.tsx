import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink
      to={"/"}
      className="lg:nav-link font-thin"
      aria-label="Go to homepage"
    >
      <img src="./logo-gurbo.png" alt="Gurbo logo" className="w-[75px]" />
    </NavLink>
  );
};

export default HeaderLogo;
