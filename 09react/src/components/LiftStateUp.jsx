import { useState } from "react"

export const LiftStateUp = () => {
    const [inputComponent, setInputComponent] = useState("")
    return (
        <>
        <InputComponent inputComponent = {inputComponent} setInputComponent = {setInputComponent} />
        <DisplayComponent inputComponent =  {inputComponent} />
        </>
    )
}

const  InputComponent = ({inputComponent, setInputComponent}) => {
    
    return(
        <>
        <input type="text" placeholder="write here" 
        value={inputComponent} 
        onChange={(e) => setInputComponent(e.target.value)}/>
        </>
    )
}

const DisplayComponent = ({inputComponent}) => {
    return(
        <>
        <p>Display your value:- {inputComponent}</p>
        </>
    )
}