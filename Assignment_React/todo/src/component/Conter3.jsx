import { useState } from "react"

export const Counter3 = () => {
    const [val, setVal] = useState(0);
    const [flag, setFlag] = useState(true);
    function handleBtn() {
        if (val === 9) {
            setFlag(false);
        }
        if (val === 1) {
            setFlag(true);
        } 
        if (flag) {
            setVal(val+1)
        }
        if (flag === false) {
            setVal(val - 1);
        }
    }
    
    
    return <>
        <h1>counter{val}</h1>
        <button onClick={handleBtn}>{flag?"Add by one":"Sub by one"}</button>
       
    
    </>
}