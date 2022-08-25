import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Thank you for your purchase!</h1>
      <Link to="/store">
        <button>Go back to shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
