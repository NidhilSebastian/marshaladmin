import React, { Component } from "react";
import StepZilla from "react-stepzilla";
import "../../styles/css/stepzilla.css";
import Stepone from "./stepone";
import Stetwo from "./steptwo";
import Stepthree from "./stepthree";
import { Link } from "react-router-dom";

export class ForgotPasswordWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCancelHandler = async (e) => {
    let loginUrl = "/";
    this.props.history.push(loginUrl);
  };

  render() {
    const steps = [
      { name: "Enter number", component: <Stepone {...this.props} /> },
      { name: "Enter OTP", component: <Stetwo {...this.props} /> },
      {
        name: "Change password",
        component: <Stepthree {...this.props} />,
      },
    ];

    return (
      <div>
        <div className="row  pt-4">
          <div className="col-sm-12 text-right"></div>
        </div>
        <div className="row pt-2">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 text-center pl-4 pr-4 msa-signup_colum msa-signup-div-shadow">
            <div className="m-md manage-class-wizard">
              <div className="text-right">
                <i
                  className="fa fa-times m-r-xs msa-calcel-otp-window"
                  onClick={this.onCancelHandler}
                  aria-hidden="true"
                >
                  &nbsp;
                </i>
              </div>

              <StepZilla
                steps={steps}
                stepsNavigation={false}
                prevBtnOnLastStep={true}
                startAtStep={0}
                nextButtonCls="btn btn-dark inline-vertical-top m-r-sm"
                backButtonCls="btn btn-dark inline-vertical-top m-r-sm"
                nextButtonText={
                  <>
                    Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </>
                }
                backButtonText={
                  <>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i> Back{" "}
                  </>
                }
                nextTextOnFinalActionStep={
                  <>
                    Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </>
                }
                //onStepChange={this.onStepChangeHandler}
              />
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row  pt-4">
          <div className="col-sm-12">&nbsp;</div>
        </div>
        <div className="row pt-4">
          <div className="col-sm-12 text-center">
            <label className="msa-footer-login-label">
              @ 2020 Copyright Girmiti software. All Rights Reserved
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordWizard;
