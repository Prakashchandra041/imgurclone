import { useState } from "react";
import { nanoid } from 'nanoid'

export const Todo = () => {
    const [val, setVal] = useState("");
    const [list, setList] = useState([]);
    function handleInput(e) {
        setVal(e.target.value);
    }
    function handleBtn() {
        const data = {
            id:nanoid(4),
            title: val,
            status: false
        }
        setList([...list, data]);
        setVal("");
    }
    function handleToggle(id) {
        const updatedList = list.map((ele) => {
            if (ele.id == id) {
                ele.status = !ele.status;
            }
            return ele;
        })
        setList(updatedList);
    }
    function handleDelete(id) {
        const updatedList = list.filter((ele) => {
            if (ele.id !== id) {
                return ele;
            }
        })
        setList(updatedList);

    }
    return <>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your list" onChange={handleInput} value={val} />
        <button onClick={handleBtn} >Enter</button>
        {list.map((ele,i) => {
            return <div style={{ border: "1px solid black", width:"50%", margin:"auto",padding:"15px"}} key={ele.id}> <h1>{ele.title}</h1>
                <button onClick={() => {
                    handleToggle(ele.id)
                }}>{ele.status ? "Done" : "NotDone"}</button>
                <button onClick={() => {
                    handleDelete(ele.id)
                }}>Delete</button>
            </div>
        })}
    </>
}