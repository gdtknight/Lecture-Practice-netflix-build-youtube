import React, { useState, useEffect } from "react";
import "./Nav.css";
import NINJA from "./resources/img/ninja-avatar.jpeg";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo image"
        />

        <img
          className="nav__avatar"
          src={NINJA}
          alt="ninja-avatar image"
        />
      </div>
    </div>
  );
}


export default Nav;
