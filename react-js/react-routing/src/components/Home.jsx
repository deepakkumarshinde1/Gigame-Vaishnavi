import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      Home <button onClick={() => navigate("/about-us")}>About</button>
      <Link to="/about-us">Go About Us</Link>
    </div>
  );
}

export default Home;
