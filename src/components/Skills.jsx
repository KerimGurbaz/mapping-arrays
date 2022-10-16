import React from "react";
import Skill from "./Skill";

const Skills = ({ skills }) => {
  const skillsList = skills.map((skill, index) => (
    <Skill key={index} skill={skill} />
  ));
  console.log(skillsList);
  return <ul>{skillsList}</ul>;
};

export default Skills;
