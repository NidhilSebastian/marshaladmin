import React from "react";
import PublicPageRouting from "./publicPageRouting";

const PublicLayout = (props) => {
  return (
    <div className="container-fluid">
      <PublicPageRouting {...props}></PublicPageRouting>
    </div>
  );
};

export default PublicLayout;
