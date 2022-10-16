import React from "react";

const NumberGenerator = () => {
  let events = [];
  let odds = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2) {
      odds.push(i);
    } else {
      events.push(i);
    }
  }
  console.log(odds, events);
  return (
    <div>
      <li>{odds}</li>
      <li>{events}</li>
    </div>
  );
};

export default NumberGenerator;
