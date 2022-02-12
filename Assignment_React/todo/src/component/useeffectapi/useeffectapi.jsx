import { useEffect, useState } from "react"

export const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
       let res= await fetch(`https://api.github.com/users`);
        let data = await res.json();
        setUsers(data);
    }
    //  const getUsers = () => {
    //      fetch(`https://api.github.com/users`)
    //          .then((res) => res.json())
    //          .then((res) => setUsers(res));
   
    // }
    useEffect(() => {
        getUsers();
    }, [])
    
    console.log("Users",users)
    return <>
        <h2> list git users</h2>
        {users.map(({login,id}) => {
           return <h1 key={id} >{ login}</h1>
        })}
    </>
}