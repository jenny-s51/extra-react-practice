import { useState, useCallback } from "react";
import List from "./List.js"
// Usage: In memoization, the result is “remembered” when the same parameters are passed-in subsequently.
// useMemo returns the *value* of a function
// lets us avoid calling expensive functions on every render

export default function App() {


  const [number, setNumber] = useState(1);

  /* every time we change this number getItems is getting created again and again
  we can prevent this!! useCallback is not going to rerun code unless certain
  parameters change */
  const [darkTheme, setDarkTheme] = useState(false);

  // useCallback returns a function
  const getItems = useCallback(() => {
    return [number, number+1, number+2];
  }, [number] )
  // slowFunction(number);

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#FFF",
    color: darkTheme ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
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

      <List getItems={getItems} />
    </div>
  );

}
