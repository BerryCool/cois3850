import React from "react";
import { Dashboard, Landing, Learn, Login, About } from "../Pages";
import { Router, Route, Redirect, Switch } from "wouter";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/learn" component={Learn} />
        <Route path="/login" component={Login} />
        <Route path=":rest">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
