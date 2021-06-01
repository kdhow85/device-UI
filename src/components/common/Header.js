import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "blue" };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          SCRAM Systems
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                exact
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/client"
              >
                Add Client
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/device"
              >
                Add Device
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron">
        <h1>SCRAM CAM Bracelet Administration</h1>
        <p>
          This application will allow you to view and update SCRAM CAM Bracelet
          statuses.
        </p>
      </div>
    </>
  );
}

export default Header;
