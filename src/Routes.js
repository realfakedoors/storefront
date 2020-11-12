import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";

const Routes = () => {
  function iconLocator(id) {
    return process.env.PUBLIC_URL + "/icons/icon-" + id + ".svg";
  }

  return (
    <BrowserRouter>
      <SiteNav />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home iconLocator={iconLocator} />}
        />
        <Route
          path="/shop"
          component={() => <Shop iconLocator={iconLocator} />}
        />
        <Route
          path="/about"
          component={() => <About iconLocator={iconLocator} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
