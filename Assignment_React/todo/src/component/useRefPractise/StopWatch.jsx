import { useEffect, useRef, useState } from "react"



export const StopWatch = () => {
    const [count, setCount] = useState(0);
    const refEle = useRef(null);
    useEffect(() => {
        handleTimer();
    }, []);
    function handleTimer() {
        refEle.current=setInterval(() => {
            setCount((pre) => pre + 1);
        }, 1000);
    }

    return <>
        <h1>Timer {count} </h1>
        <button onClick={() => {
            clearInterval(refEle.current);
        }} > Pause</button>
        <button onClick={() => {
            if (refEle.current) {
                return
            }
            handleTimer()
        }}>Resume</button>
        <button onClick={() => {
            setCount(0)
        }}>Restart</button>
    </>
}