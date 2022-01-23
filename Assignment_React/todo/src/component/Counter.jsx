import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    function handlebtnInc() {
        setCount(count+1)
    }
    function handlebtnDec() {
        setCount(count - 1);
    }
    return <>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={handlebtnInc}>Increment</button>
        <button onClick={handlebtnDec}>Decrement</button>


    </>
}