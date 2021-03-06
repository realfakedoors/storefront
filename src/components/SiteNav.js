import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const SiteNav = () => {
  return (
    <nav
      className="navbar site-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL}>
        <img
          className="navbar-item site-navbar-item"
          src={logo}
          alt="logo"
          width="110"
          height="25"
        />
        <h5 className="navbar-item site-navbar-item company-name">
          The Awesome Music Shop
        </h5>
      </a>
      <div className="navbar-menu">
        <div className="navbar-end site-navbar-end">
          <NavLink
            exact
            to="/"
            className="navbar-item site-navbar-item"
            activeClassName="site-navbar-selected"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="navbar-item site-navbar-item"
            activeClassName="site-navbar-selected"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="navbar-item site-navbar-item"
            activeClassName="site-navbar-selected"
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
