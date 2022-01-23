import { useState } from "react"

export const CondtionRederExample = () => {
    const [count, setCount] = useState(0);

    function handlebtn() {
       
        setCount(count+1)
    }
    
    return count % 2 == 0 ? <>
        <h1>count from even {count}</h1>
        <button onClick={()=>{handlebtn()}}>press</button>
    </> : <>
        <h1>count from odd {count}</h1>
        <button onClick={()=>{handlebtn()}}>press</button>
        </>
}