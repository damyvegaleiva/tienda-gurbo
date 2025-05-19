import { useEffect, useState } from "react";
import CartWidget from "../components/CartWidget";
import HamburgerMenuIcon from "../components/HamburgerMenuIcon";
import HeaderLogo from "../components/HeaderLogo";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-around items-end bg-white p-4 shadow-md relative">
      <HamburgerMenuIcon handleClick={handleClick} isOpen={isOpen} />

      <HeaderLogo />

      <Navbar isOpen={isOpen} />
      <CartWidget />
    </header>
  );
};

export default HeaderContainer;
