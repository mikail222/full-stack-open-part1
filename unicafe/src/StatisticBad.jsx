import React from "react";

const StatisticBad = (props) => {
  console.log(props);
  return (
    <div>
      <table >
        <tr>
          <td className="span">Bad</td>
          <td> {props.bad}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticBad;
