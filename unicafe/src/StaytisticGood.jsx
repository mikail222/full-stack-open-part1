import React from "react";

const StatisticGood = (props) => {
  console.log(props);
  return (
    <div>
      <table>
        <tr>
          <td className="span">Good </td>
          <td>{props.good}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticGood;
