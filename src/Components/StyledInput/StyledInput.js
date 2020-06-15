import React, { useState } from "react";
import "./StyledInput.css";

const StyledInput = (props) => {
  var {value = "", placeholder = "label" , style , ...restInputProps} = props;
  var [focused, setFocus] = useState(false);
  return (
    <div style={{...style}} className="styled-input-container flex">
      <div className="input-container">
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type="text"
          value={value}
          {...restInputProps}
        />
        <span className={`${(focused || value) && "focusedLabel"}`}>{placeholder}</span>
      </div>
      <div className="input-outline-container flex">
        <div className={`${(focused || value) && "input-outline-filler-focused"}`}></div>
      </div>
    </div>
  );
};

export default StyledInput;
