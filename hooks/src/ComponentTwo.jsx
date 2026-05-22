import { useState } from 'react';

function ComponentTwo() {
    const [mode, setMode] = useState(false)

    const toggle = () => setMode(!mode);

    return (
        <button onClick={toggle}>{mode ? 'Login Open' : 'Login Closed'}</button>
    )
}

export default ComponentTwo;