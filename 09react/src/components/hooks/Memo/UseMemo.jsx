import { memo, useMemo, useState } from "react";



const ExpensiveComponent = () =>{
    const sum = () => {
        console.log("Calculating sum....");
        let i = 0;
        for (i = 0; i <= 1000000000; i++){
            i = i + 1;
        }
        return i;
    };

    const total = useMemo(() => sum(), [])

    return(
        <>
        <p>sum: {total}</p>
        </>
    )
}


function MemoParentComponent() {
    const [count, setCount] = useState(0)
    return ( 
        <>
        < ExpensiveComponent />
       <button onClick={() => setCount(count + 1)}>Click Me!</button>
       <p> {count} </p>
        </>
     );
}

export default MemoParentComponent;