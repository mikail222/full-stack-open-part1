import React from "react";

const Parts = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
  console.log(part1)
  
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

export default Parts;
