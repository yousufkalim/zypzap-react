// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Construction from "../containers/Construction.js";
import Home from "../containers/Home";
import Blog from "../containers/Blog";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Construction} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/blog" component={Blog} />
    </Switch>
  );
};

export default index;
