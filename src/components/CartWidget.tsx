import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <NavLink
      to={"/cart"}
      className="lg:nav-link font-thin"
      aria-label="View shopping cart"
    >
      <CiShoppingCart size={30} />
    </NavLink>
  );
};

export default CartWidget;
