import React, { Component } from "react";
import DropDown from "../common/DropDown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Text from "../common/Textbox";
import Header from "../common/Header";
import Button from "../common/Button";

export class SignupFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      confirmPassword: "",
      schoolName: "",
      fullName: "",
      Landmark: "",
      addressLocation: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      email: "",
      societyortrustname: "",
      designation: "",
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-center pt-2">
            <Header headerContent="School Staff Signup" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">User name</label>
            <Text
              id="userName"
              name="userName"
              value={this.state.userName || ""}
              placeholder="UserName"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
          <div className="col-md-4  pt-2 pr-4">
            <label className="msa-label-text">Password</label>
            <Text
              id="password"
              name="password"
              value={this.state.password || ""}
              placeholder="password"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
          <div className="col-md-4  pt-2  pr-4">
            <label className="msa-label-text">Confirm password</label>
            <Text
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword || ""}
              placeholder="Confirm password"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Full Name</label>
            <Text
              id="fullName"
              name="fullName"
              value={this.state.fullName || ""}
              placeholder="Full name"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">School name</label>
            <Text
              id="schoolName"
              name="schoolName"
              value={this.state.schoolName || ""}
              placeholder="School name"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Address/Location</label>
            <Text
              id="addressLocation"
              name="addressLocation"
              value={this.state.addressLocation || ""}
              placeholder="Address location"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4 ">
            <label className="msa-label-text">Landmark</label>
            <Text
              id="landmark"
              name="landmark"
              value={this.state.Landmark || ""}
              placeholder="Landmark"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Country</label>
            <DropDown
              name="country"
              className="msa-input-box-02"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select country--"
            />
          </div>
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">State</label>
            <DropDown
              name="state"
              className="msa-input-box-02"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select state--"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">City</label>
            <DropDown
              name="city"
              className="msa-input-box-02"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select state--"
            />
          </div>

          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">zip</label>
            <Text
              id="zip"
              name="zip"
              value={this.state.zip || ""}
              placeholder="Zip"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>

          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Primary mobile number</label>
            <PhoneInput
              country={"us"}
              id="primarymobilenumber"
              name="primarymobilenumber"
              value={this.state.primarymobilenumber || ""}
              containerClass="react-tel-input-01"
              //onChange={phone => this.setState({ phone })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Secondary mobile number</label>
            <PhoneInput
              country={"us"}
              id="secondarymobilenumber"
              name="secondarymobilenumber"
              value={this.state.secondarymobilenumber || ""}
              containerClass="react-tel-input-01"
              //onChange={phone => this.setState({ phone })}
            />
          </div>

          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Other mobile number</label>
            <PhoneInput
              country={"us"}
              id="othermobilenumber"
              name="othermobilenumber"
              value={this.state.othermobilenumber || ""}
              containerClass="react-tel-input-01"
              //onChange={phone => this.setState({ phone })}
            />
          </div>

          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Fax</label>
            <PhoneInput
              country={"us"}
              id="faxnumber"
              name="faxnumber"
              value={this.state.faxnumber || ""}
              containerClass="react-tel-input-01"
              //onChange={phone => this.setState({ phone })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 pt-2 pr-4">
            <label className="msa-label-text">Email</label>
            <Text
              id="email"
              name="email"
              value={this.state.email || ""}
              placeholder="Email"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>

          <div className="col-md-4  pt-2 pr-4">
            <label className="msa-label-text">Designation</label>
            <Text
              id="designation"
              name="designation"
              value={this.state.designation || ""}
              placeholder="Designation"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>

          <div className="col-md-4  pt-2 pr-4 ">
            <label className="msa-label-text">Society/Trust Name</label>
            <Text
              id="societyortrustname"
              name="societyortrustname"
              value={this.state.societyortrustname || ""}
              placeholder="Society/Trust Name"
              type="text"
              className="msa-input-box-02"
            ></Text>
          </div>
        </div>
        <div className="row pb-2 pt-4">
          <div className="col-md-5"></div>
          <div className="col-md-2 text-center pt-2">
            <Button
              id="signup"
              alignment="inline-vertical-top search-btn"
              text="Sign Up"
              type="submit"
              onClick={this.props.onSignUpHandler}
              className="btn btn-dark msa-login-box-login-btn msa-btn-signup"
            />
          </div>
          <div className="col-md-5"></div>
        </div>
      </>
    );
  }
}

export default SignupFields;
