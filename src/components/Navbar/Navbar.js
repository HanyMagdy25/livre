import React, { useState } from "react";
// Import React Router Dom
import { Link, NavLink, useNavigate } from "react-router-dom";
//  import CSS File
import "./Navbar.css";
// Import Data From Utils
import { navTitle } from "../../utils/data";
// Import Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
// Import Images
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profile.png";
import Dropdown from "./Dropdown";
// URL
// const URL ="https://livre.softwarecloud2.com";

const Navbar = ({ userOfLivre }) => {
  const [click, setClick] = useState(false);
  const [dropNav, setDropNav] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  // console.log("nav",userOfLivre)

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
            <span className="flex">
              {click ? <AiOutlineClose /> : <AiOutlineMenu />}
            </span>
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
            {!userOfLivre ? (
              <button
                onClick={() => navigate("/login")}
                className="btn btn-purple"
              >
                تسجيل دخول
              </button>
            ) : (
              <div className="profile-navbar" onClick={()=>setDropNav(!dropNav)}>
                <img src={profileImg} alt="profile-img" loading="lazy" />
                <span className="flex-center"><MdKeyboardArrowDown/></span>
                {dropNav && <Dropdown />}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
