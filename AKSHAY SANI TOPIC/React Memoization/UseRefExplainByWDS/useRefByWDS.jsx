
import { useState, useRef, useEffect } from "react";

export const CountRender=()=>{

    const [name, setName] = useState("");
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount + 1;
    })

    return (
        <>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered { renderCount.current}</div>
        </>
    )
}
