import React from "react";
import Parts from "./Parts";

const Content = (props) => {
  return (
    <div>
      <Parts
        part1={props.parts[0].name}
        exercises1={props.parts[0].exercises1}
      />
      <Parts
        part2={props.parts[1].name}
        exercises2={props.parts[1].exercises2}
      />
      <Parts
        part3={props.parts[2].name}
        exercises3={props.parts[2].exercises3}
      />
    </div>
  );
};

export default Content;
