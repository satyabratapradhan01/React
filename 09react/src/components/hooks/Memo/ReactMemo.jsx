import React, { useState } from 'react';
import MemoCount from './MemoCount';

function ReactMemo() {
    const [count, setCount] = useState(0)
    return ( 
        <>
        <h1>{count}</h1>
        <button onClick={() => {setCount( count + 1 )}}>CleckMe</button>
        <MemoCount />
        </>
     );
}

export default ReactMemo;