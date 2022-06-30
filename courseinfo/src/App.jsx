import React from "react";
import "./App.css";
import Content from "./Component/Content.jsx";
import Header from "./Component/Header.jsx";
import Total from "./Component/Total.jsx";

const App = () => {
  const course = {
    name: "Half Stack application development",
  };
  const parts = [
    {
      name: "Fundamentals of React",
      exercises1: 10,
    },
    {
      name: "Using props to pass data",
      exercises2: 7,
    },
    {
      name: "State of a component",
      exercises3: 14,
    },
  ];

  return (
    <div className="App">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
