import React, { Component } from "react";
import girmitilogo from "../../images/grimiti-logo-1.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: null,
  };
  onChangeEvent = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onLogin = async (e) => {
    e.preventDefault();
    if (this.state.username.trim().length === 0) {
      this.setState({ errorMessage: "User name cannot be empty." });
    }
    if (this.state.password.trim().length === 0) {
      this.setState({ errorMessage: "Password cannot be empty." });
    }

    const isLoginSucceeded = await this.props.loginUser(
      this.state.username,
      this.state.password
    );
    if (!isLoginSucceeded) {
      this.setState({ errorMessage: "Invalid username or password" });
      return;
    } else {
      this.setState({ errorMessage: null });
    }
  };

  onSignUpHandler = async (e) => {
    let signUpUrl = "/signup";
    this.props.history.push(signUpUrl);
  };

  render() {
    return (
      <div className="container-fluid mas-login-gb-color">
        <div className="row msa-login-header_raw">
          <div className="col-md-12"></div>
        </div>
        <div className="row msa-login-mid_raw  pt-6">
          <div className="col-md-1 "></div>
          <div className="col-md-6 msa-login-logo-div">
            <img className="msa-login-logo" src={girmitilogo} alt="" />
          </div>
          <div className="col-md-4 msa-login-last_colum msa-login-div-shadow">
            <div className="row">
              <div className="col-md-12 msa-login-box-div-1">&nbsp;</div>
            </div>
            <form onSubmit={this.onLogin}>
              <div className="row">
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
                <div className="col-md-8 msa-login-box-div-2">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.onChangeEvent}
                      name="username"
                      className="form-control"
                      placeholder="Username"
                    ></input>
                  </div>
                </div>
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
                <div className="col-md-8 msa-login-box-div-2">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.onChangeEvent}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-12">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
                <div className="col-md-8 msa-login-box-div-3">
                  <div className="row justify-content-md-center">
                    <div className="col-md-6 pr-2">
                      <input
                        type="button"
                        value="Sign Up"
                        className="btn btn-dark msa-login-box-login-btn"
                        onClick={this.onSignUpHandler}
                      ></input>
                    </div>
                    <div className="col-md-6 pl-2">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-dark  msa-login-box-login-btn"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-12">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
                <div className="col-md-8 msa-login-box-div-3">
                  <div className="row justify-content-md-center">
                    <input
                      type="submit"
                      value="Forgot Password?"
                      className="btn btn-link msa-login-forgot-link"
                    ></input>
                  </div>
                </div>
                <div className="col-md-2 msa-login-box-div-2">&nbsp;</div>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-sm-12 text-center">
          <label className="msa-footer-login-label">
            @ 2020 Copyright Girmiti software. All Rights Reserved
          </label>
        </div>
      </div>
    );
  }
}

export default Login;
