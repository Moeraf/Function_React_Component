export default function FirstCmp01(){
    const name = "useprops";
    return <SecondCmp01 value={name} age={2} f1={()=>{alert("function from props")}} />
}

export function SecondCmp01(props){
    return(
        <>
        <h1>how to {props.value} - {props.age}</h1>
        <button onClick={()=>{props.f1()}}>click me</button>
        </>
    )
}