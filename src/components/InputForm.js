import React from "react";

const InputForm = ({ name, placeholder, handler }) => {
  var inputName = `input-${name}`;
  return (
    <div className="form-group">
      <label htmlFor={inputName}>{name}</label>
      <input
        id={inputName}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={handler}
      />
    </div>
  );
};

export default InputForm;
