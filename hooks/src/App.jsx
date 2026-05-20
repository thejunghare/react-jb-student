import { useState, useRef } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const id = useRef(null)

  function handleStart() {
    // 0 -> 1 per 1 second
    id.current = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1)
    }, 1000)
  }

  function handleStop() {
    clearInterval(id.current)
  }

  return (
    <>
      <p>{number}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default App
