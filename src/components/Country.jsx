import React from "react";

const Country = ({ country: { name, city } }) => {
  console.log(name, city);
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

export default Country;
