import React from "react";

const StatisticAverage = ({ text, average }) => {
  return (
    <div>
      <table>
        <tr>
          <td className="span">{text}</td> <td> {average}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatisticAverage;
