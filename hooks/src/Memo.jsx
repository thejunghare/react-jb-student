import { useState, useMemo } from 'react';

function Memo() {

    const [theme, setTheme] = useState(false)
    const [num, setNum] = useState(1)

    const mode = {
        border: "2px solid red",
        height: '200px',
        // theme 
        background: theme ? "black" : "white",
        color: theme ? "white" : "black"
    }

    const heavyResult = useMemo(() => {
        let result = 0;

        for (let i = 0; i < 1000000000; i++) {
            result += num
        }
    }, [num])

    // let result = 0;

    // for (let i = 0; i < 1000000000; i++) {
    //     result += num
    // }

    return (
        <div style={mode}>
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            <p> {heavyResult}</p>
            <button onClick={() => setNum(num + 1)}>Increment number</button>
        </div>
    )
}

export default Memo;