import React from "react";
import "../styles/css/index.css";
import NavBarLeft from "./navbarLeft";
import ContentPageRouting from "./contentPageRouting";
import "../styles/css/boostrap-theme.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <div className="op-content-body">
        <div className="row">
          <div className="col-md-1">
            <NavBarLeft {...props}></NavBarLeft>
          </div>
          <div className="col-md-11 msa-col-body">
            <ContentPageRouting></ContentPageRouting>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Layout;
