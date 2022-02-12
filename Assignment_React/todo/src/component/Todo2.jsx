import { useState } from "react"
export const Todo2 = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function handleInput(e) {
        setText(e.target.value);
    }
    function handleEnter() {
        let obj={
            Title: text,
            status: true,
        }
        setList([...list, obj]);
        setText("")
    }

    function handleDelete(el) {
        let updatalist = list.filter((ele) => {
            if (ele !== el) {
                return ele
            }
        })
        setList(updatalist);  
    }

    function handleToggle(el) {
        const updateList = list.map((ele) => {
            if (ele == el) {
                ele.status = !ele.status;
            }
            return ele;
        })
        setList(updateList);
    }
    
    return <>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter you list" onChange={handleInput} value={text} />
        <button onClick={handleEnter}>Enter</button>
        {list.map((ele,i) => {
            return <h3 id={i}>{ele.Title}
                <button onClick={() => {
                    handleDelete(ele)
                }} >Delete</button>  
                
                <button onClick={() => {
                    handleToggle(ele);
                }}>{ele.status?"Done":"Not Done"}</button>
            </h3>
        })}

    </>
}