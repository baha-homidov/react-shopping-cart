import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="link">Home</Link>
        <Link to="/store" className="link">Store</Link>
      </div>
    </>
  );
};

export default Navbar;
