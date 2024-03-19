import "./Toggle.css";
import React, { useState, useRef } from "react";

export const Toggle = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChangeUnit = () => {
    props.setter(!isChecked);
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="toggle-container">
        <div className="toggle-content">
          <input
            class="tgl tgl-light"
            id="control-unit"
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeUnit}
          />
          <label class="tgl-btn" for="control-unit"></label>
        </div>
      </div>
    </div>
  );
};
