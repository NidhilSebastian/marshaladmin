import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/home";
import UserProfile from "../components/Profile/userProfile";
import AdminSignup from "../components/Signup/adminSignup";

const ContentPageRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/profile" component={UserProfile}></Route>
    </Switch>
  );
};

export default ContentPageRouting;
