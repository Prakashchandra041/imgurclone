import { useState } from "react"


export const FormPractise = () => {
    const [formData, setFormData] = useState({});
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
       
    }
    function handleChange(e) {
        const { name, value,type,checked } = e.target;
        setFormData({
            ...formData,
            [name]: type==="checkbox"? checked:value,
            
        })
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="UserName" placeholder="Enter Your Name" onChange={handleChange} /><br />
            <input type="number" name="Age" placeholder="Enter Your Age" onChange={handleChange} /><br />
            <select name="Country" onChange={handleChange}>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
            </select><br />
            Is Married <input type="checkbox" name="Is Married" onChange={handleChange} /><br />
            <input type="submit"/>
        </form>
    </>
}