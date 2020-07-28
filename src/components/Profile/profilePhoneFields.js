import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Text from "../common/Textbox";
import DropDown from "../common/DropDown";

export class ProfilePhoneFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primarymobilenumber: "",
      alternatemobilenumber: "",
      address: "",
      landmark: "",
      zipcode: "",
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-2 pt-4">
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
          <div className="col-md-1"></div>
          <div className="col-md-2 pt-4">
            <label className="msa-label-text">Alternate mobile number</label>
            <PhoneInput
              country={"us"}
              id="alternatemobilenumber"
              name="alternatemobilenumber"
              value={this.state.alternatemobilenumber || ""}
              containerClass="react-tel-input-01"
              //onChange={phone => this.setState({ phone })}
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 pt-4">
            <label className="msa-label-text">Country</label>
            <DropDown
              name="country"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select country--"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 pt-4">
            <label className="msa-label-text">State</label>
            <DropDown
              name="state"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select state--"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 pt-4">
            <label className="msa-label-text">Address/Location</label>
            <Text
              id="address"
              name="address"
              value={this.state.address || ""}
              placeholder="Address/Location"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 pt-4">
            <label className="msa-label-text">City</label>
            <DropDown
              name="city"
              className="msa-input-box-01"
              options=""
              value=""
              onChange=""
              tabIndex=""
              selectName="--select city--"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 pt-4">
            <label className="msa-label-text">Zip code</label>
            <Text
              id="zipcode"
              name="zipcode"
              value={this.state.zipcode || ""}
              placeholder="Zip code"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 pt-4">
            <label className="msa-label-text">Landmark</label>
            <Text
              id="landmark"
              name="landmark"
              value={this.state.landmark || ""}
              placeholder="Landmark"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
          <div className="col-md-1"></div>
        </div>
      </>
    );
  }
}

export default ProfilePhoneFields;
