import { use, useContext } from "react"
import { BioContext } from "."

export const About = () => {
    
    const newHook = true;
    let name, age;  

    if (newHook) {
        ({ name, age } = use(BioContext))
    }
    
    return (
        <>
        <h1>Hello, Context Api (About). My name is {name}. i am {age} yrs old</h1>
        </>
    )
}