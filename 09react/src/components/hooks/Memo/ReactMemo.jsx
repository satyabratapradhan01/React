import  { useMemo, useState } from 'react';
import MemoCount from './MemoCount';



function ReactMemo() {
//     const myBioData = {
//      name: "satya",
//     age: 21,
//    }
    const [count, setCount] = useState(0)

    const myBioData = useMemo(() => {
   return{
     name: "satya",
    age: 21,
   }
}, [])

    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={() => {setCount( count + 1 )}}>CleckMe</button>
        <MemoCount bioData = {myBioData} />
        </>
     );
}

export default ReactMemo;