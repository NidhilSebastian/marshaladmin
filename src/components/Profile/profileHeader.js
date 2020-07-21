import React, { Component } from "react";
import girmitilogo from "../../images/Nidhil.jpg";
import TextBox from "../common/Textbox";

export class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Nidhil Sebastian",
      Email: "nidhil.sebastian@girmiti.com",
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-1 text-left pt-4">
            <div
              style={{ float: "left", width: "150px", display: "table-cell" }}
            >
              <img
                src={girmitilogo}
                className="msa-contact-header-image"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3 text-left pl-4 msa-user-profile-name-div">
            <label className="msa-user-profile-name">{this.state.Name}</label>
            <TextBox
              id="email"
              name="email"
              alignment="inline-vertical-top"
              text="Contact name"
              className="form-control msa-no-border"
              placeholder="Email"
              value={this.state.Email}
              title="Clik to edit"
            ></TextBox>
          </div>
          <div className="col-md-8 text-left pt-4"></div>
        </div>
      </>
    );
  }
}

export default ProfileHeader;
