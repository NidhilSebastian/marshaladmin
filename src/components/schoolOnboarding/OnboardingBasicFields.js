import React, { Component } from "react";
import Text from "../common/Textbox";

export class OnboardingBasicFields extends Component {
  render() {
    return (
      <>
        <div className="raw pb-4 pt-4">
          <div className="col-md-6 text-left">
            <Text
              id="schoolName"
              name="schoolName"
              value={this.props.schoolName || ""}
              placeholder="School Name"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left">
            <Text
              id="address"
              name="address"
              value={this.props.address || ""}
              placeholder="Address"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
        <div className="raw pb-4">
          <div className="col-md-6 text-left">
            <Text
              id="landMark"
              name="landMark"
              value={this.props.address || ""}
              placeholder="Landmark"
              type="text"
              className="msa-input-box-01"
            ></Text>
          </div>
        </div>
      </>
    );
  }
}

export default OnboardingBasicFields;
