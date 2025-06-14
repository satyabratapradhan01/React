
import { useBioContext } from "."

export const Home = () => {
    const{ name, age} = useBioContext();
    // const age = useContext(BioContext);
    return (
        <>
        <h1>Hello, Context Api. My name is {name}. i am {age} yrs old</h1>
        </>
    )
}