import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../Signup/adminSignup";

const PublicPageRouting = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Login {...props} />}></Route>
      <Route exact path="/login" component={() => <Login {...props} />}></Route>
      <Route
        exact
        path="/signup"
        component={() => <SignUp {...props} />}
      ></Route>
    </Switch>
  );
};

export default PublicPageRouting;
