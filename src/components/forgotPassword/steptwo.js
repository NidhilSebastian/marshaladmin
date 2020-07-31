import React, { Component } from "react";
import OtpInput from "react-otp-input";

export class Steptwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }
  handleChange = (otp) => this.setState({ otp });
  render() {
    return (
      <>
        <div className="row p-4">
          <div className="col-sm-12">
            Enter the 4 digit OTP number sent via SMS on your phone{" "}
          </div>
        </div>
        <div className="row p-4">
          <div className="col-sm-4">
            <OtpInput
              onChange={this.handleChange}
              separator={<span className="msa-otp-sperator-style">-</span>}
              shouldAutoFocus
              containerStyle=""
              inputStyle="msa-otp-container-style"
              value={this.state.otp}
            />
          </div>
          <div className="col-sm-6 text-center"></div>
        </div>
        <div className="row p-4">
          <div className="col-sm-12">
            <label>OTP not received?</label>
            <input
              type="submit"
              value="Resend OTP"
              className="btn btn-link msa-resent-otp"
              onClick={this.onForgotpasswordUpHandler}
            ></input>
          </div>
        </div>
      </>
    );
  }
}

export default Steptwo;
