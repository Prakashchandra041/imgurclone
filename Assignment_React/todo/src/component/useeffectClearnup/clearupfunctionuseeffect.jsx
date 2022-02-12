import { useEffect, useState } from "react"



export const Cleanupfun = () => {
    const [width, setWidth] = useState(window.screen.width)
    function actualSize() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        console.log("add Event")
        window.addEventListener("resize", actualSize);
        return () => {
            console.log("Remove Event");
            window.removeEventListener("resize",actualSize)
        }
    },[])   // remove this empty dependency while explain write just for safty


    return <>
        <h1> Actual screen window size is{ width}</h1>
    </>
}