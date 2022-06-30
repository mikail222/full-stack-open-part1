import React from "react";

const StatisticGoodButton = (props) => {
  console.log(props);
  return <button onClick={props.handleGoodClick}>{props.text}</button>;
};
export default StatisticGoodButton;
