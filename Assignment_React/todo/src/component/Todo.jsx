import { useState } from "react"
import { nanoid } from 'nanoid'

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);
    function handleInput(e) {
        let value = e.target.value;
        setInputValue(value);
    }
    function handleBtn() {
        let obj = {
            title: inputValue,
            status: false,
            id: nanoid(4)
        }
        setList([...list, obj]);
        setInputValue("");
    }
    function handleToggle(id) {
        const updatedList = list.map((el) => {
            if (id === el.id) {
                el.status = !el.status;
            }
            return el;
        })
        setList(updatedList);
    }

    function handleDelete(id) {
        const updateList = list.filter((ele) => {
            if (ele.id !== id) {
                return ele;
            }
        })
        setList(updateList);
     }

    return <>
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your list" onChange={handleInput} value={inputValue} />
        <button onClick={handleBtn}>Enter</button>

        <div>
            {list.map((ele) => {
                return <div key={ele.id}>
                    <h3>{ele.title}</h3>
                    <button onClick={() => {
                        handleToggle(ele.id)
                    }} >{ele.status ? "Done" : "Not Done"}</button>
                    <button onClick={() => {
                        handleDelete(ele.id)
                    }}> Delete</button>
                </div>
            })}



        </div>

        
    
    </>
}