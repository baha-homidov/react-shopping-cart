import { Link } from "react-router-dom";
import "../assets/styles/CartIcon.css";
import cartIcon from "../assets/img/cart-icon.png";
const CartIcon = (props) => {
  let itemCount = 0;
  props.cart.forEach((element) => {
    itemCount += element.quantity;
  });

  return (
    <>
      <Link to="/cart" className="cart-icon-container">
        <img className="cart-icon-img" src={cartIcon} alt="" />
        <div>{itemCount}</div>
      </Link>
    </>
  );
};

export default CartIcon;
