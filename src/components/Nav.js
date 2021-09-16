import React from 'react'
import { Link } from "react-router-dom";

import "./styling.css";

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
                <Link className="font3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font3" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="font3" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="font3" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav
