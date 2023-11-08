import React, {useState,useEffect} from "react";

export default function HowToUseEffect(){
    const [count, setcount] = useState(0)
    useEffect(() => setcount(current => current +1 ), []);
    const handelIncrement = ()=>{
        setTimeout(() => {
            setcount(current=>current + 1)
        }, 0);
    }
    const handelDecrement = ()=>{
        setTimeout(() => {
            setcount(current=>current - 1)
        }, 0);
    }

    return(
        <>
            <h1>--------------------</h1>
            <h1>HOW TO USE EFFECT</h1>
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