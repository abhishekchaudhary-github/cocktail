import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Chaudhary's
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive
              ? {
                  color: "red",
                  textDecoration: "none",
                  marginRight: "2rem",
                  marginLeft: "65rem",
                }
              : {
                  color: "grey",
                  textDecoration: "none",
                  marginRight: "2rem",
                  marginLeft: "65rem",
                };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return isActive
              ? { color: "red", textDecoration: "none" }
              : { color: "grey", textDecoration: "none" };
          }}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
