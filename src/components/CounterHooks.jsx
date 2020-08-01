import React, { useState } from "react"

function CounterHooks() {
  const [count, setCount] = useState(0)

  const incHook = () =>{
    setCount(count + 1)
  }

  return (
    <>
      <h1>CounterHooks</h1>
      <p>{count}</p>
      <button onClick={incHook}>Add</button>
    </>
  )}

export default CounterHooks