import { useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0]);
  const anecdo = (max) => {
    return Math.floor(Math.random() * max.length);
  };

  const handleNextClick = () => {
    setSelected(anecdo(anecdotes));
  };
  const handleVoteClick = () => {
    const copy = [...vote];
    copy[selected] = copy[selected] + 1;
    setVote(copy);
  };

  const highest = Math.max(...vote);
  const topAnectdot = anecdotes[vote.indexOf(highest)];
  console.log(topAnectdot);

  return (
    <div className="App">
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p> has {vote[selected]} vote </p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdotes</button>
      <h2>Anecdotes with most vote</h2>
      {topAnectdot}
      <p>has {highest} votes</p>
    </div>
  );
}

export default App;
