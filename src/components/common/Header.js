import React from "react";

const Header = (props) => {
  return (
    <div className="msa-header">
         <h5 className="msa-header-text">{props.headerContent}</h5>
      </div>
  );
};

export default Header;
