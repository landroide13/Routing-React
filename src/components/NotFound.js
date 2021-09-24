import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <div className="col s10 offset-s2 m10 offset-m2 l10 offset-l2 top3">
        <div className="card red darken-2">
          <div className="card-content white-text center-align">
            <span className="card-title">Content Not Found</span>
            <p>Not Content Available</p>
          </div>
          <div className="card-action grey darken-3 center-align">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound
