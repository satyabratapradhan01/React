import { useContext } from "react"
import { BioContext } from "."

export const About = () => {
    const{ name, age} = useContext(BioContext);
    
    return (
        <>
        <h1>Hello, Context Api (About). My name is {name}. i am {age} yrs old</h1>
        </>
    )
}