import React, { useReducer } from 'react';

function ReducerComp() {

    const initialState =  {
        count: 0,
    }

    const Reducer = (state, action) => {
        console.log(state, action)

        // if(action.type === "INCREMENT"){
        //   return  state + 1;
        // }

        // if(action.type === "DECREMENT"){
        //   return  state - 1;
        // }

        // if(action.type === "RESET"){
        //     return 0;
        // }

        switch (action.type) {
            case "INCREMENT":
                return {count: state.count + 1};

                 case "DECREMENT":
                return {count: state.count = 1};

                 case "REST":
                return {count: 0};
                
        
            default:
                 return state;
        }



    }

    const [state, dispatch] = useReducer(Reducer,  initialState);

    return ( 
        <div className='p-4 h-lvh flex flex-col justify-center items-center' >
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
     );
}

export default ReducerComp;
