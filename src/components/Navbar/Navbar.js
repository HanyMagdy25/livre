import React, { useState } from "react";
// Import React Router Dom
import { Link, NavLink } from "react-router-dom";
//  import CSS File
import "./Navbar.css";
// Import Data From Utils
import { navTitle } from "../../utils/data";
// Import Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
// Import Images
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Livre" loading="lazy" />
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex-center btn-login-div">
            <span className="flex-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex-center"
              >
                <BsInstagram />
              </a>{" "}
            </span>
            <span className="flex-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex-center"
              >
                <BsTwitter />
              </a>{" "}
            </span>
            <button className="btn btn-purple">تسجيل دخول</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
