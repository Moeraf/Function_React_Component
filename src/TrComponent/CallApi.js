import React, {useState,useEffect} from "react"

export default function HowToCallApi(){

    const getData = ()=>{fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
        console.log('hello fetch the number has changed');
      setData(json)
    })}

    const [data,setData] = useState([])
    const [name,setName] = useState(0)

    useEffect(()=>{getData()},[name])
    return(
        <>
            <h1>--------------------</h1>
            <h1>HOW TO USE EFFECT</h1>
            <h1>{data.length}</h1>
            <button onClick={()=>{setName(current=>current +1)}}>change nb</button> {name}
        </>
    )
}
