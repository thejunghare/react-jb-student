import { useState } from 'react'

export function useMode(value = false) {
    const [mode, setMode] = useState(value);

    const toggle = () => {
        // change the value from false to true
        setMode((prevMode) => !prevMode)
    }

    return [mode, toggle]

}