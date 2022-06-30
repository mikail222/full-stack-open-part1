import React from "react";

const Total = (props) => {
  return (
    <div>
      <p>
        Numbers of exercise =
        {props.parts[0].exercises1 +
          props.parts[1].exercises2 +
          props.parts[2].exercises3}
      </p>
    </div>
  );
};

export default Total;
