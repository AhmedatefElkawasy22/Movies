import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
  function local() {
    localStorage.setItem('token', "");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            <h3 style={{ cursor: "default" }}>Noxe</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.user ?
              <>
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/signin">
                  Signin
                </NavLink>
              </li>            
            </ul>
              </>
              :
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/tv">
                  Tv Show
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/people">
                  People
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/about">
                  About Us
                </NavLink>
              </li>
              
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/signin" onClick={local}>
                  Logout
                </NavLink>
              </li>
            </ul>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
}
