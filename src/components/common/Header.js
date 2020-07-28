import React from "react";

const Header = (props) => {
  return (
    <div className="row">
      <div className="col-md-12 ">
        <label className="msa-header-text">{props.headerContent}</label>
      </div>
    </div>
  );
};

export default Header;
