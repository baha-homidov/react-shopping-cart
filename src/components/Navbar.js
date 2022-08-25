import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/store">Store</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
