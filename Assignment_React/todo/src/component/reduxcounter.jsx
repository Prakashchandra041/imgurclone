import { useDispatch, useSelector } from "react-redux";
import { addCount,subCount } from "../store/Action";



export const Reduxcounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(store=>store.count);
    return <>
        <h1>conter{count} </h1>
        <button onClick={() => { dispatch(addCount(1)) }}>Add</button>
        <button onClick={()=>{dispatch(subCount(1))}}>sub</button>
    </>
}