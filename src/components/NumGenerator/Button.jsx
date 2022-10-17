import React from "react";
import { useState } from "react";

const Button = () => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleClick = () => {
    handleValue();
  };
  return (
    <div className="d-flex justify-content-center my-3">
      <input type="number" value={value} onChange={handleValue} />
      <button className="btn btn-danger mx-2" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Button;
