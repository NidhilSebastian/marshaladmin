import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/home";

const ContentPageRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Switch>
  );
};

export default ContentPageRouting;
