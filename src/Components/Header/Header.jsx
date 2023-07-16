import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../Assets/materialize-white-logo.png";

import "./header.css";
import Dropdown from "./../Dropdown";
import AboutMenu from "./AboutMenu";
import TopNav from "./../topNav/TopNav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <TopNav />
      <section className="header-sec">
        <header className={`header header-row  ${isSticky ? "sticky" : ""}`}>
          <nav className=" large-screen">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navbar">
              <button className="navItem">
                <a href="https://materialize.com/docs" className="navLink">
                  Docs
                </a>
              </button>
              <button className="navItem nav-btn">
                <Dropdown />
              </button>

              <button className="navItem">
                <a href="https://materialize.com/pricing/" className="navLink">
                  Pricing
                </a>
              </button>
              <button className="navItem">
                <a href="https://materialize.com/blog/" className="navLink">
                  Blog
                </a>
              </button>
              <button className="navItem nav-btn">
                <AboutMenu />
              </button>
            </div>
            <div className="left-btn">
              <button className="navItem">
                <a href="https://console.materialize.com/account/login">
                  Sign In
                </a>
              </button>
              <button className="navItem gradient-button">
                <a href="https://materialize.com/register/">try free</a>
              </button>
            </div>
            <div onClick={toggleNav} className="toggleNavbar">
              {showNav ? (
                <AiOutlineClose className="icon" />
              ) : (
                <AiOutlineMenu className="icon" />
              )}
            </div>
          </nav>
          {/* Media query screen */}
          <div
            onClick={toggleNav}
            className={`toggleNavWrapper ${showNav ? "active" : ""}`}
          >
            <div onClick={toggleNav} className="toggleNavbar">
              <div
                className={`toggle-navigation ${showNav ? "activeNavbar" : ""}`}
              >
                <div className="toggle-header">
                  <div className="logoDiv">
                    <a href="/" className="logo flex">
                      <img src={logo} alt="" />
                    </a>
                  </div>

                  <div onClick={toggleNav} className="closeNavbar">
                    <AiOutlineClose className=" icon" />
                  </div>
                </div>
                <button className="navItem">
                  <a href="https://materialize.com/docs" className="navLink">
                    Docs
                  </a>
                </button>
                <button className="navItem nav-btn">
                  <Dropdown />
                </button>
                <button className="navItem">
                  <a
                    href="https://materialize.com/pricing/"
                    className="navLink"
                  >
                    Pricing
                  </a>
                </button>
                <button className="navItem">
                  <a href="https://materialize.com/blog/" className="navLink">
                    Blog
                  </a>
                </button>
                <button className="navItem nav-btn">
                  <AboutMenu />
                </button>
                <button className="navItem">
                  <a href="https://console.materialize.com/account/login">
                    Sign In
                  </a>
                </button>
                <button className="navItem gradient-button">
                  <a href="https://materialize.com/register/">Try Free</a>
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
