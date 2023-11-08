export default function FirstCmp02(){
    const name = "props";
    return <SecondCmp02 value={name} age={3}/>
}

export function SecondCmp02({value,age}){
    return(
        <>
        <h1>replacment for the {value} - {age}</h1>
        </>
    )
}
