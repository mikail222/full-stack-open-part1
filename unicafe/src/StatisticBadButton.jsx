import React from "react";

const StatisticBadButton = (props) => {
  return <button onClick={props.handleBadClick}>{props.text}</button>;
};

export default StatisticBadButton;
