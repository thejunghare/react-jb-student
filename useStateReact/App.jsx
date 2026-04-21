/*
Challenge: prevent the count value from going below 0 or above 100.
*/

import { useState } from 'react' // or import React from 'react' -> this imports whole react

const initialCount = () => 0;

const App = () => {
    /*
    Destructuring useState can be done in multiple ways.

    const [count, setCount] = useState(...)
    - count is the current state value
    - setCount is the function used to update count (by convention it starts with "set")
    */
   
    // const [count, setCount] = useState(0); // use React.useState(0) if importing whole react!

    // const [count, setCount] = useState(() => 0); // using arrow function

    const [count, setCount] = useState(initialCount); // using function reference

    /* using anonymous function
    const [count, setCount] = useState(function () {
        return 0
    });
    */

    // Any of these approaches does the same thing: it sets the initial value for our state variable; only the syntax differs.

    function add() {
        // setCount(count + 1)
        /*
        Problem: if you call setCount(count + 1) multiple times in the same event,
        each call uses the same (stale) value of count.

        Example:
        initial count -> 0
        setCount(count + 1) // 0 + 1 = 1
        setCount(count + 1) // still 0 + 1 = 1

        Fix: use the functional update form to get the latest previous value.
        */
        setCount((prev) => prev + 1)
    }

    function sub() {
        setCount(count - 1)
        // setCount(prev => prev - 1)
    }

    return (
        <>
            {count}
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
        </>
    )
}

export default App;