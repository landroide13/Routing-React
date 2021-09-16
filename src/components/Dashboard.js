import React, { Component } from 'react'
import './styling.css';

export default class Dashboard extends Component {

  
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Dashboard</h3>

          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3 top3">
                <h5>Profile</h5>
                <span className="">
                  <i class="fas fa-user-circle fa-3x"></i>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Passport</h5>
                <span className="">
                  <i class="fas fa-passport fa-3x"></i>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Vaccine Record</h5>
                <span className="">
                  <i class="fas fa-file-medical fa-3x"></i>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Driving License</h5>
                <span className="">
                  <i class="fas fa-portrait fa-3x"></i>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>QR Code</h5>
                <span className="">
                  <i class="fas fa-qrcode fa-3x"></i>
                </span>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card-panel #eeeeee grey lighten-3">
                <h5>Picture</h5>
                <span className="">
                  <i class="fas fa-portrait fa-3x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
