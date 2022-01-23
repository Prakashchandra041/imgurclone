import { useState } from "react"

export const Counter = () => {
    let [count, setCount] = useState(0);
    function handleDec() {
        setCount(count - 1);
    }

    function handleInc() {
        setCount(count + 1);
    }
    return <>
        <h1>counter - {count}</h1>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleInc}>Increment</button>

        <h1>counter - {count-1}</h1>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleInc}>Increment</button>
    </>

}