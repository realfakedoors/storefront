import React, { useState, useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { NotificationManager, NotificationContainer } from 'react-notifications';

import ShoppingCart from "./ShoppingCart";
import Products from "./Products";

const Shop = ({ iconLocator }) => {
  const [cartContents, setCartContents] = useState(JSON.parse(localStorage.getItem('cartContents')));
  const [itemWasDeleted, setItemWasDeleted] = useState(false);
  const [isSticky, setIsSticky] = useStateIfMounted(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });
  
  useEffect(() => {
    localStorage.setItem("cartContents", JSON.stringify(cartContents));
  }, [cartContents]);

  function handleScroll() {
    if (window.scrollY > 107) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  function addToCart(item) {
    NotificationManager.success(`${item.name} added to cart.`);
    setCartContents((prevCartContents) => [...prevCartContents, item]);
  }

  function deleteItem(item) {
    NotificationManager.error(`${item.name} removed from cart.`);
    setCartContents(cartContents.filter((product) => product.itemId !== item.itemId));
    setItemWasDeleted(true);
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
        className={"navbar-item"}
        iconLocator={iconLocator}
        deleteItem={deleteItem}
        itemWasDeleted={itemWasDeleted}
        isSticky={isSticky}
      />
      <NotificationContainer/>
      <nav className={`navbar ${isSticky && "sticky"}`} id="shop-nav">
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
              <Products category={category} addToCart={addToCart} />
            </Route>
          );
        })}
        <Route exact path={match.path}>
          <Products category={"all"} addToCart={addToCart} />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
