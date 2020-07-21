import React from "react";

const TextBox = (props) => {
  return (
    <input
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      type={props.type}
      maxLength={props.maxLength}
      className={props.className}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
    ></input>
  );
};

export default TextBox;
