import React, {useState} from "react";

// --v1
export default function FirstCmp04(){
    return <SecondCmp04/>
}

// const SecondCmp04 = ()=>{
//     const [name,setname] = useState("hello moemen know how to use useState");
//     return (
//         <h1>{name}</h1>
//     )
// }

// const SecondCmp04 = ()=>{
//     const [info,setinfo] = useState({name: "moemen", age: 24});
//     return (
//         <h1>Hello {info.name}</h1>
//     )
// }


// const SecondCmp04 = ()=>{
//     const [intro,setname] = useState({name: "moemen", age: 24});
//     return (
//         <>
//         <h1>Hello {intro.name}</h1>
//         <input type="text" value={intro.name} onChange={(e)=>{setname({name: e.target.value, age: intro.age})}}></input>
//         </>
//     )
// }


// --v2
// export default function FirstCmp04(){
//     const [intro,setname] = useState({name: "moemen"});
//     const forchange = (e)=>{setname({name: e.target.value})};
//     return <SecondCmp04 name={intro.name} handelforchange={forchange}/>
// }

// const SecondCmp04 = ({name, handelforchange})=>{
//     return (
//         <>
//         <h1>Hello {name}</h1>
//         <input type="text" value={name} onChange={handelforchange}></input>
//         </>
//     )
// }


// --v3
// export default function FirstCmp04(){
//     const [intro,setname] = useState({name: "moemen"});
//     const forchange = (e)=>{setname({name: e.target.value})};
//     return(
//         <>
//             <SecondCmp04 name={intro.name} />
//             <ThirdCmp04 name={intro.name} handelforchange={forchange}/>
//         </>
//     )
// }

// const SecondCmp04 = ({name})=>{
//     return (
//         <>
//         <h1>Hello {name}</h1>
//         </>
//     )
// }

// const ThirdCmp04 = ({name, handelforchange, children})=>{
//     return (
//         <>
//             <input type="text" value={name} onChange={handelforchange}></input>
//         </>
//     )
// }


// --v4
// export default function FirstCmp04(){
//     const sayHi = ()=>{alert("hiiiiii")}
//     return(
//         <>
//             <ReturnHi />
//             <ReturnHi handelclick={sayHi} />
//         </>
//     )
// }

// const ReturnHi = ({handelclick})=>{
//     const sayDefault = ()=>{alert("default")}
//     const onclick = handelclick || sayDefault
//     return(
//         <>
//             <button type="button" onClick={onclick}>Click Me</button>
//         </>
//     )
// }


// --v5 (children used)
// export default function FirstCmp04(){
//     const sayHi = ()=>{alert("hiiiiii")}
//     return(
//         <>
//             <ReturnHi>default</ReturnHi>
//             <ReturnHi handelclick={sayHi}>normal</ReturnHi>
//         </>
//     )
// }

// const ReturnHi = ({handelclick,children})=>{
//     const sayDefault = ()=>{alert("default")}
//     const onclick = handelclick || sayDefault
//     return(
//         <>
//             <button type="button" onClick={onclick}>{children}</button>
//         </>
//     )
// }


// --v6
export default function FirstCmp04(){
    const [count, setcount] = useState(0)
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
            <h1>------------------------------</h1>
            <h1>HOW TO USESTATE</h1>
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
