// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Construction from "../containers/Construction.js";
import Home from "../containers/Home";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Construction} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default index;
