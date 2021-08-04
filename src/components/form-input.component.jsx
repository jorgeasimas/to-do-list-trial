import React from "react";


import "./form-input.styles.scss";

const FormInput = (props) => {
  return (
    <div className="group">
      <input className="form-input" />
      {props.label ? (
        <label className="form-input-label">{props.label}</label>
      ) : null}
    </div>
  );
};
export default FormInput;