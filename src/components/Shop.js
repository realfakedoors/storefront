import React, { useState } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import Products from "./Products";

const Shop = ({ iconLocator }) => {
  const [cartContents, setCartContents] = useState([]);

  function addToCart(item) {
    setCartContents((prevCartContents) => [...prevCartContents, item]);
  }

  const match = useRouteMatch();
  const allCategories = [
    "brass",
    "wind",
    "keys",
    "strings",
    "percussion",
    "equipment",
  ];

  return (
    <div className="shop">
      <ShoppingCart
        contents={cartContents}
        className="navbar-item is-right"
        iconLocator={iconLocator}
      />
      <nav className="navbar shop-nav">
        <div className="navbar-menu is-justify-content-center">
          <NavLink
            exact
            to={match.url}
            className="navbar-item category-link"
            activeClassName="shop-navbar-selected"
          >
            All Products
          </NavLink>
          {allCategories.map((category, index) => {
            return (
              <NavLink
                key={index}
                to={`${match.url}/c/${category}`}
                className="navbar-item category-link"
                activeClassName="shop-navbar-selected"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <Switch>
        {allCategories.map((category, index) => {
          return (
            <Route path={`${match.path}/c/${category}`} key={index}>
              <Products category={category} addToCart={addToCart} key={index} />
            </Route>
          );
        })}
        <Route path={match.path}>
          <Products category={"all"} addToCart={addToCart} />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
