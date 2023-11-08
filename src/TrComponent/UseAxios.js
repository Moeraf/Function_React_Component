import React, {useState,useEffect} from "react";
import axios from 'axios';


export default function UseAxios(){

    const getData = ()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> {
            // console.log(res.data);
            setUsers(res.data)
        })
}

    const [users,setUsers] = useState([])
    const [name,setName] = useState(0)

    const renderusers = ()=>{
        let sketch = users.map((user)=>{return <li key={user.id} className="collection-item"  >{user.email} <span class="new badge">4</span></li>})
        return sketch
    }

    useEffect(()=>{getData()},[])
    return(
        <>
            <h1>--------------------</h1>
            <h1>HOW TO USE AXIOS</h1>
            <h1>{users.length}</h1>
            <ul className="collection" >{renderusers()}</ul>
            <button onClick={()=>{setName(current=>current +1)}}>change nb</button> {name}
        </>
    )
}

