import { useContext } from "react"
import { BioContext } from "."

export const Home = () => {
    const name = useContext(BioContext);
    return (
        <>
        <h1>Hello, Context Api. My name is {name}</h1>
        </>
    )
}