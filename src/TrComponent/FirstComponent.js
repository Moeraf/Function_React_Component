export default function FirstCmp(){
    return <FromsecondCmp/>
}

function FromsecondCmp(){
    const name = "first"
    return(
        <h1>hello from the {name} component with functioon</h1>
    )
}