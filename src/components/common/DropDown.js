import React from "react";

const DropDown = (props) => {
  return (
    <select                 
        className= {props.className}
        name={props.name}
        value={props.value}
        tabIndex={props.tabIndex}
        onChange={props.onChange}>                       
        {/* {props.defaultOption ? <option value=''>{props.defaultOption}</option> : null}
        {
            props.options.map(item =>
                <option
                    key={item.key}
                    value={item.key}>
                    {item.value}
                </option>)
        } */}
        <option>{props.selectName}</option>
    </select> 
  );
};

export default DropDown;
