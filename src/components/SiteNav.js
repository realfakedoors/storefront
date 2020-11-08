import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const SiteNav = () => {
  return (
    <nav
      className="navbar site-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
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
      </div>
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
