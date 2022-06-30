import React from "react";

const StatisticNeutral = (props) => {
  return <button onClick={props.handleNeutralClick}>{props.text}</button>;
};

export default StatisticNeutral;
