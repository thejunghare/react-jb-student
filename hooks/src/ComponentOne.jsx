// import { useState } from 'react';
import { useMode } from './useMode'

function ComponentOne() {
    // const [mode, setMode] = useState(false)
    const [mode, toggle] = useMode(false)

    // const toggle = () => setMode(!mode);

    return (
        <button onClick={toggle}>{mode ? 'Login Open' : 'Login Closed'}</button>
    )
}

export default ComponentOne;