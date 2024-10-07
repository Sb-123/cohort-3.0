import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// conditional rendering.
function App() {
  let counterVisible = true;
  return (
    <>
      hi
      {counterVisible ? <Counter></Counter> : null}
      hello
    </>
  );
}
// mounting, re-rendering, unmounting.
function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
      setCount((curr) => curr + 1);
    }, 1000);
    console.log("mounted");
  }, []); // dependency array, cleanup, fetch inside useEffect.

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 id="text">{Counter}</h1>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default App;
