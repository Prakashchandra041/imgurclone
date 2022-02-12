import { useEffect, useState } from "react"

export const Prakash = () => {
    const [value, setValue] = useState(window.screen.width);

    function actualSize() {
        setValue(window.innerWidth);
    }

    useEffect(() => {
        actualSize();
    },[])
    return <>
        <h1> width of screen{value }</h1>
    </>
}