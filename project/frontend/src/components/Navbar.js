import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2 className="logo">
        Explore here
      </h2>


      <ul className="nav-links">

        <li>
          <Link to="/home">
            Home
          </Link>
        </li>


        <li>
          <Link to="/about">
            About
          </Link>
        </li>


        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>


        <li>
          <Link to="/">
            Logout
          </Link>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;