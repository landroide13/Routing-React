import React, { Component } from 'react';
import './styling.css';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {

  
  render() {
    return (
      <React.Fragment>
        <div>
          <h5>Dashboard</h5>

          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3 top3">
                <h5>Profile</h5>
                <span className="">
                  <Link to="./Profile">
                    <i className="fas fa-user-circle fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Passport</h5>
                <span className="">
                  <Link to="./Profile">
                    <i className="fas fa-passport fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Vaccine Record</h5>
                <span className="">
                  <Link to="./NotFound">
                    <i className="fas fa-file-medical fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Driving License</h5>
                <span className="">
                  <Link to="./NotFound">
                    <i className="fas fa-portrait fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Display QR</h5>
                <span className="">
                  <Link to="./Profile">
                    <i className="fas fa-qrcode fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Picture</h5>
                <span className="">
                  <Link to="./NotFound">
                    <i className="fas fa-portrait fa-3x icon"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
