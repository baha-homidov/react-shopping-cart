import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
import arrowImg from "../assets/img/home-button-arrow.png";
import sneakerImg from "../assets/img/sneaker.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="title">SNEAKER BOX</div>
      <div className="subtitle">For all walks of life</div>

      <Link to="/store" className="button">
        <div id="dub-arrow">
          <img src={arrowImg} alt="" />
        </div>
        <div className="text">SHOP NOW</div>
      </Link>

      <img className="sneaker-img" src={sneakerImg} alt="" />
    </div>
  );
};

export default Home;
