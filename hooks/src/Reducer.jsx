// import { useState, useReducer } from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
  step: 0,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "setStep":
      return { ...state, step: action.payload };
  }
};

function Reducer() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(0);

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  // const incrementByStep = () => {
  //   setCount((prevCount) => prevCount + step);
  // };

  return (
    <>
      <h1>{state.count}</h1>
      <input
        placeholder="0"
        value={state.step}
        onChange={(e) =>
          dispatch({
            type: "setStep",
            payload: Number(e.target.value),
          })
        }
      />
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment count
      </button>
    </>
  );
}

export default Reducer;
