import React, {useState,useEffect} from "react";

export default function UseLoacalStorage(){

    // const [count, setcount] = useState(0)

    const initialCount = +localStorage.getItem('storageCount') || 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState("moemen");

    // useEffect(() => setCount(current => current +1 ), []);
    useEffect(() => localStorage.setItem('storageCount', count));
    // useEffect(()=>{alert("nothing has changed")},[]);  //replaces the didmount wen empty array 
    // useEffect(()=>{alert("count has changed")},[count]); // replaces the onchange life cycle event
    // useEffect(()=>{alert("name has changed")},[name]); // replaces the onchange life cycle event

    const handelIncrement = ()=>{
        setTimeout(() => {
            setCount(current=>current + 1)
        }, 0);
    }

    const handelDecrement = ()=>{
        setTimeout(() => {
            setName(current=>current + "x")
        }, 0);
    }

    return(
        <>
            <h1>------------------------------</h1>
            <h1>Local Storage</h1>
            <h1>{count}</h1>
            <Btn handelclick = {handelIncrement}>increment</Btn>
            <Btn handelclick = {handelDecrement}>decrement</Btn>
        </>
    )
}

const Btn = ({handelclick,children})=>{
    return(
        <>
            <button type="button" onClick={handelclick}>{children}</button>
        </>
    )
}