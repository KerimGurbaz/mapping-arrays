import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};

export default Countries;
