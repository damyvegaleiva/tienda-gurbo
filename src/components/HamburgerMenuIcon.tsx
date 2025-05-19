import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

type THamburgerMenuIconProps = {
  handleClick: () => void;
  isOpen: boolean;
};

const HamburgerMenuIcon: React.FC<THamburgerMenuIconProps> = ({
  handleClick,
  isOpen,
}) => {
  return (
    <button
      aria-expanded={isOpen}
      aria-controls="main-menu"
      aria-label="Menu"
      onClick={handleClick}
      className="text-2xl lg:hidden"
    >
      {isOpen ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
    </button>
  );
};

export default HamburgerMenuIcon;
