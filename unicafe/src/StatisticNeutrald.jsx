import React from "react";

const StatisticNeutrald = (props) => {
  console.log(props);
  return (
    <div>
      <table>
        <tr>
          <td className="span">Neural </td>
          <td>{props.neutral}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticNeutrald;
