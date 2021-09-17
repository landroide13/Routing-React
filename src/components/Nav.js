import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./styling.css";

export default class Nav extends Component {

  sideNav = () => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }


  componentDidMount() {
    this.sideNav()
  }

  render() {

    return (
      <React.Fragment>
        <nav className="#212121 grey darken-4">
          <div className="nav-wrapper">
            <div className="container">
              <span className="brand-logo">Virtual Safe</span>
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons burger">menu</i>
              </a>
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

        <ul className="sidenav" id="slide-out">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./profile">Profile</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}


