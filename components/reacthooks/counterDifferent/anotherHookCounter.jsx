import React, {useReducer} from 'react';
const countReducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter:state.counter+5};
            case 'decrement':
                return {counter:state.counter-1};
        default:
            return state;
    }
}
function AnotherHookCounter(props) {
    const [counter,dispatch]=useReducer(countReducer, {counter:0})
    return (
        <>
        <h1 className="text-violet-950"> Using Reduce Hook</h1>
            <button className="btn btn-success mr-3" onClick={()=>dispatch({type :"increment"})}>+</button>
            <button className="btn btn-success mr-3" onClick={()=>dispatch({type :"decrement"})}>-</button>
            <h1 className={"text-warning"}>{counter.counter}</h1>

        </>
    );
}

export default AnotherHookCounter;