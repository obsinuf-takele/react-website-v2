import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src="images/RVU-logo.png"></img>
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fab fa-typo3" />
          </Link> *
          <a href="Index.html"> <img src="images/rvu-logo.png"> </a> */}
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#About-us"
                className="nav-links"
                onClick={closeMobileMenu}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#Faculties"
                className="nav-links"
                onClick={closeMobileMenu}>
                Faculties
              </a>
            </li>

            <li>
              <a
                href="/Faculties"
                className="nav-links-mobile"
                onClick={closeMobileMenu}>
                Log in
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Log in</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
