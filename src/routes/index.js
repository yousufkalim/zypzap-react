// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Construction from "../containers/Construction.js";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Construction} />
    </Switch>
  );
};

export default index;
