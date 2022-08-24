// import { Link } from "react-router-dom";
import "../assets/styles/CartIcon.css";
const CartIcon = (props) => {
  let itemCount = 0;
  props.cart.forEach((element) => {
    itemCount += element.quantity;
  });

  return (
    <>
      <button className="cart-icon">Cart: {itemCount }</button>
    </>
  );
};

export default CartIcon;
