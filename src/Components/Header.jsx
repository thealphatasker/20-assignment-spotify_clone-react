import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* NavBar */}
      <nav>
        <div className="left-half">
          <div className="logo">
            <i className="fa-brands fa-spotify"></i>
          </div>
          <NavLink to="/" className="home-icon">
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <div className="search-bar">
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              className="input-box"
              placeholder="What do you want to play?"
            />
            <div className="browse">
              <i className="fa-solid fa-folder-open"></i>
            </div>
          </div>
        </div>
        <div className="right-half">
          <div className="right-half-p1">
            <p className="nav-text">Premium</p>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `nav-text ${isActive ? "active" : ""}`
              }
            >
              Support
            </NavLink>
            <p className="nav-text">Download</p>
          </div>
          <div className="right-half-p2">
            <div className="nav-text">
              <i className="fa-regular fa-circle-down"></i> Install App
            </div>
            <div className="nav-text">Sign up</div>
            <button className="login-btn">Log in</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
