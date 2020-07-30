import React, { Component } from "react";
import DropDown from "../common/DropDown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SignupFields from "./signupFields";
import { NotificationManager } from "react-notifications";

export class AdminSignup extends Component {
  constructor(props) {
    super(props);
  }

  onSignUpHandler = async (e) => {
    let loginUrl = "/";
    this.props.history.push(loginUrl);
    NotificationManager.success("Sign up completed successfully", "SignUp");
  };

  render() {
    return (
      <div className="msa-signup-header_content-div">
        <div className="row pt-2">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 pl-4 pr-4 msa-signup_colum msa-signup-div-shadow">
            <SignupFields onSignUpHandler={this.onSignUpHandler}></SignupFields>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default AdminSignup;
