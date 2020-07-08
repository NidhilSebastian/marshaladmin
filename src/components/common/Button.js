import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disableButton}
      tabIndex={props.tabIndex}
      data-toggle="tooltip"
      data-placement="top"
      title={props.tooltipText}
    >
      {props.iconAtLast ? (
        ""
      ) : (
        <i className={props.icon} aria-hidden="true"></i>
      )}
      &nbsp;{props.text}&nbsp;
      {props.iconAtLast ? (
        <i className={props.icon} aria-hidden="true"></i>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
