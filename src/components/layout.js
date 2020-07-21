import React from "react";
import "../styles/css/index.css";
import NavBarLeft from "./navbarLeft";
import ContentPageRouting from "./contentPageRouting";
import "../styles/css/boostrap-theme.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import girmitilogo from "../images/girmiti_logo.png";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <div className="row msa-header-raw border">
        <div className="col-sm-6 text-left msa-header-login-div">
          <img className="msa-header-login-logo" src={girmitilogo} alt="" />
        </div>
        <div className="col-sm-6 text-right msa-header-login-div">
          <label className="msa-header-login-label">nidhil sebastian</label>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1 msa-nav-bar-left border">
          <NavBarLeft {...props}></NavBarLeft>
        </div>
        <div className="col-sm-11">
          <div className="msa-content-body">
            <div className="row">
              <div className="col-sm-12 msa-col-body">
                <ContentPageRouting></ContentPageRouting>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row msa-footer-raw border">
        <div className="col-sm-6 text-center msa-header-login-div">
          <label className="msa-footer-label">
            @ 2020 Copyright Girmiti software. All Rights Reserved
          </label>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Layout;
