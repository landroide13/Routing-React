import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="#212121 grey darken-4">
        <div className="nav-wrapper">
          <Link href="#" className="brand-logo">
            Virtual Safe
          </Link>
          <div className="container">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav
