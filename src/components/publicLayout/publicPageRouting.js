import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../Signup/adminSignup";
import ForgotPasswordWizard from "../forgotPassword/forgotPassword";

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
      <Route
        exact
        path="/forgotpassword"
        component={() => <ForgotPasswordWizard {...props} />}
      ></Route>
    </Switch>
  );
};

export default PublicPageRouting;
