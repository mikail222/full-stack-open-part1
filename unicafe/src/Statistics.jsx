import React from "react";
import DisplayStatistic from "./DisplayStatistic";
import StatisticAll from "./StatisticAll";
import StatisticAverage from "./StatisticAverage";
import StatisticBad from "./StatisticBad";
import StatisticBadButton from "./StatisticBadButton";
import StatisticGoodButton from "./StatisticGoodButton";
import StatisticNeutral from "./StatisticNeutral";
import StatisticNeutrald from "./StatisticNeutrald";
import StatisticPercentage from "./StatisticPercentage";
import StatisticGood from "./StaytisticGood";

const Statistics = ({ setGood, good, setNeutral, neutral, setBad, bad }) => {
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const all = [good + neutral + bad];
  // // console.log(all)
  const average = all.map((all) => (all / 3).toFixed(2));
  const percentage = all.map((all) => (average / all) * 100);

  // // let clicks = [...all, average, percentage];
  const checkAll = all.reduce((a, b) => a + b);
  console.log(checkAll);

  return (
    <div>
      <h1>
        <em>give feed back</em>
      </h1>
      <div className="btnAll">
        <StatisticGoodButton text="good" handleGoodClick={handleGoodClick} />
        <StatisticNeutral
          text="neutral"
          handleNeutralClick={handleNeutralClick}
        />
        <StatisticBadButton text="bad" handleBadClick={handleBadClick} />
      </div>
      {checkAll === 0 ? (
        <DisplayStatistic />
      ) : (
        <div>
          <h1>
            <em>statistics</em>
          </h1>
          <StatisticGood good={good} />
          <StatisticNeutrald neutral={neutral} />
          <StatisticBad bad={bad} />
          <StatisticAll text="All" all={all} />
          <StatisticAverage text="Average" average={average} />
          <StatisticPercentage percentage={percentage} />
        </div>
      )}
    </div>
  );
};

export default Statistics;
