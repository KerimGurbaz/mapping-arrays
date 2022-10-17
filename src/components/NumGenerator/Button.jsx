import React from "react";
import { useState } from "react";

const Button = ({ setValue, value }) => {
  const [click, setClick] = useState("");

  // const handleValue = (e) => {
  //   console.log(e.target.value);
  //   setValue(e.target.value);
  // };

  // const handleClick = () => {
  //   handleValue();
  // };
  console.log(click, value);
  console.log("click :>> ", click);
  console.log("value :>> ", value);

  return (
    <div className="d-flex justify-content-center my-3">
      <input type="number" onChange={(e) => setClick(e.target.value)} />
      <button onClick={() => setValue(click)} className="btn btn-danger mx-2">
        Click me
      </button>
    </div>
  );
};

export default Button;
