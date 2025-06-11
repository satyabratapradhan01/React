import { useEffect, useState } from "react"

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return(
        <>
        <p>Count: {count}</p>
        </>
    )
}