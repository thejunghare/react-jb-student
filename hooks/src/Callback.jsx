import { useState, useCallback, memo } from "react";

const ChildComponent = memo(({ increment }) => {
  console.log("Child Rendered!");
  return <button onClick={increment}>Increment Count</button>;
});

function Callback() {
  const [mode, setMode] = useState(false);
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div
      style={{
        background: mode ? "black" : "white",
        color: mode ? "white" : "black",
      }}
    >
      <h1>{count}</h1>
      <button onClick={() => setMode(!mode)}>Toggle theme</button>
      <ChildComponent increment={increment} />
    </div>
  );
}

export default Callback;
