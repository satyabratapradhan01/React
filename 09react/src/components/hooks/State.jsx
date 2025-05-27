import { useState } from "react"

export const State = () => {
    const [ count, setCount] = useState(0)

    const incressNum = () => {
        setCount(() => count + 1)
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={incressNum}>Click Me</button>
        </>
    )
}