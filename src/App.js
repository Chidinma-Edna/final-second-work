import "./styles.css";
import { Link, Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Reducer from "./Reducer";
import NavBar from "./NavBar";
import { useCounter } from "rooks";
const App = () => {
  const { value, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <p> Counter</p>
      <p> {value}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch("setValue")}>setValue</button>
      <br />
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
