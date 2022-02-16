import { useRef } from "react"

export const PractiseRef = () => {
    const refEle = useRef(null);
    return <>
        <div ref={refEle} style={{width:"400px", height:"400px", border:"1px solid black", background:"red"}}></div>
        <div style={{width:"400px", height:"400px", border:"1px solid black", background:"green"}}></div>
        <div style={{width:"400px", height:"400px", border:"1px solid black", background:"yellow"}}></div>
        <div style={{width:"400px", height:"400px", border:"1px solid black", background:"blue"}}></div>
        <div style={{width:"400px", height:"400px", border:"1px solid black", background:"pink"}}></div>
        <button onClick={() => {
            refEle.current.scrollIntoView(
               { behavior:"smooth"}
            );
        }} >CLICK ME!</button>
    </>
}