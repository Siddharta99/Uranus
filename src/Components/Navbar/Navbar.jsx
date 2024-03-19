import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [istoggleHam, setIsToggleHam] = useState(false);
  const toggleHam = () => {
    setIsToggleHam(!istoggleHam);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-info">
          <div className="logo">
            <img
              src="https://hotemoji.com/images/dl/i/moon-emoji-by-twitter.png"
              alt=""
            />
            <div className="logo-text">$URANUS Web</div>
          </div>
          <div className="routes">
            <div className="route">
              <a href="/">Home</a>
            </div>
            <div className="route">
              <a href="/about">About</a>
            </div>
          </div>
        </div>
        <div className="navbar-user">
          <div className="signup">
            <a href="/signup">
              <button>Built With N</button>
            </a>
          </div>
          {/* <div className="login">
            <a href="/login">
              <button></button>
            </a>
          </div> */}
        </div>
        <div className="hamburger-icon">
          {/* <RxHamburgerMenu size={23} onClick={toggleHam} /> */}
        </div>
      </div>
      {istoggleHam && (
        <div className="routes-container-icon">
          <div className="route-icon">
            <a href="/">Home</a>
          </div>
          <div className="route-icon">
            <a href="/about">About</a>
          </div>

          <div className="route-icon">
            <a href="/signup">Sign Up</a>
          </div>
          <div className="route-icon">
            <a href="/login">Log In</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;