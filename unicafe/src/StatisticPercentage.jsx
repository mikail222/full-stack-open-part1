import React from "react";

const StatisticPercentage = (props) => {
  console.log(props)
  return (
    <div>
      <table>
        <tr>
          <td className="span">Positive</td>
          <td> {props.percentage} %</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticPercentage;
