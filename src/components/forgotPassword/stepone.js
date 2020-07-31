import React, { Component } from "react";

export class Stepone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-mobile"></i>
                </span>
              </div>
              <input
                type="text"
                value={this.state.username}
                name="username"
                className="form-control"
                placeholder="Username"
              ></input>
            </div>
          </div>
          <div className="col-sm-6 text-center"></div>
        </div>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-sm-12">&nbsp;</div>
        </div>
      </>
    );
  }
}

export default Stepone;
