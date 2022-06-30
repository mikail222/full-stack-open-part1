import React from "react";

const StatisticAll = ({ text, all }) => {
  return (
    <div>
      <table>
        <tr>
          <td className="span">{text}</td>
          <td> {all}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticAll;
