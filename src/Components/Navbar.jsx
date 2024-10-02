import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link className="homeBtn" to={"/"}>
        HOME
      </Link>
      <Link className="blueBtn" to={"/blue"}>
        BLUE
      </Link>
      <Link className="redBtn" to={"/red"}>
        RED
      </Link>
      <Link className="yellowBtn" to={"/yellow"}>
        YELLOW
      </Link>
    </div>
  );
}
