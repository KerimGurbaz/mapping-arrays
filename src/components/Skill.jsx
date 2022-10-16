import React from "react";

const Skill = ({ skill: [tech, level] }) => {
  return (
    <li>
      {tech} {level}
    </li>
  );
};

export default Skill;
