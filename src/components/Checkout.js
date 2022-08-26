import { Link } from "react-router-dom";
import "../assets/styles/Checkout.css"
const Checkout = () => {
  return (
    <div className="checkout-container">
      <div>Thank you for your purchase!</div>
      <Link to="/store">
        <button>Go back to shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
