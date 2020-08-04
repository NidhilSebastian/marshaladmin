import React, { Component } from "react";
import { NotificationManager } from "react-notifications";

export class Stepthree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newpassword: "",
      reenteredpassword: "",
    };
  }

  onSignUpHandler = async (e) => {
    let loginUrl = "/";
    this.props.history.push(loginUrl);
    NotificationManager.success(
      "Password changed successfully",
      "Change password"
    );
  };
  render() {
    return (
      <>
        <div className="row p-2">
          <div className="col-sm-12"></div>
        </div>

        <div className="row p-2">
          <div className="col-sm-4">&nbsp;</div>
          <div className="col-sm-4 text-center">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                value={this.state.newpassword}
                onChange={this.onChangeEvent}
                name="newpassword"
                className="form-control"
                placeholder="New password"
              ></input>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

        <div className="row p-2">
          <div className="col-sm-4">&nbsp;</div>
          <div className="col-sm-4 text-center">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                value={this.state.reenteredpassword}
                onChange={this.onChangeEvent}
                name=""
                className="form-control"
                placeholder="Re-enter password"
              ></input>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

        <div className="row pb-4">
          <div className="col-sm-4">&nbsp;</div>
          <div className="col-sm-4 text-center">
            <input
              type="button"
              value="Change password"
              className="btn btn-primary msa-login-box-login-btn"
              onClick={this.onSignUpHandler}
            ></input>
          </div>
        </div>
      </>
    );
  }
}

export default Stepthree;
