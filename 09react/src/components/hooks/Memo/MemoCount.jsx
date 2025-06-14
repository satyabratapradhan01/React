import { memo, useRef } from "react";

function MemoCount() {
    const renderCount = useRef(0);

    return ( <>
    <h1>hello satya</h1>
    <p>{renderCount.current++} time(s)</p>
    </> );
}

export default memo(MemoCount) ;