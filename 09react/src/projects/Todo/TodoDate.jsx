import { useEffect, useState } from "react";

export const TodoDate = () => {
     const [DateTime, setDateTime] = useState("");

    //todo Date and Time
        useEffect(() => {
        const interval = setInterval(()=>{
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);
        return () => clearInterval(interval)
        }, [])
    return <h2 className="date-time">{DateTime}</h2>
}