import { useState, useMemo } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

// Usage: In memoization, the result is “remembered” when the same parameters are passed-in subsequently.
// useMemo returns the *value* of a function
// lets us avoid calling expensive functions on every render

export default function App() {
  const [number, setNumber] = useState(0);

  const [darkTheme, setDarkTheme] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // slowFunction(number);

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <div style={{ padding: "15px" }}>
      <h2>Enter a number (slow 🐌)</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button
        onClick={() => {
          setDarkTheme((prevDark) => !prevDark);
        }}
      >
        Change theme!
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );

  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (
      let ridiculousCounter = 0;
      ridiculousCounter <= 1000000000;
      ridiculousCounter++
    ) {}
    return num * 2;
  }
}
