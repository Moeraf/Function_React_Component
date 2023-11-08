export default function FirstCmp03(){
    const name = "function";
    return <SecondCmp03 value={name} age={4}/>
}

// -v1
// export function SecondCmp02({value,age}){
//     return(
//         <>
//         <h1>replacment for the {value} - {age}</h1>
//         </>
//     )
// }

//-v2
// const SecondCmp02 = ({value,age})=>{return <h1>replacment for the {value} - {age}</h1>}

//-v3
export const SecondCmp03 = ({name,age})=><h1>replacment for the {name} - {age}</h1>
