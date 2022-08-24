import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>

      <h1>SNEAKERBOX</h1>
      <h3>For all walks of life</h3>
      <Link to="/store">
        <button>SHOP NOW</button>
      </Link>
    </>
  );
};

export default Home;
