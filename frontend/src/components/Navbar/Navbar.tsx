import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link className="nav-link" to="/cool-transitions/home">
          Logo
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link className="nav-link" to="/cool-transitions/home">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/cool-transitions/about">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/cool-transitions/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
