import React, {useReducer} from 'react';
const reducer = (state,action) => {
    switch (action.type){
        case "INCREMENT":
            return {count:state.count+1,text:state.text}
        case "DECREMENT":
            return {count:state.count-1,text:state.text}
        case "TOGGLE":
            return {count:state.count,text:!state.text}
        default:
            return state;
    }
}
function MainReducer(props) {
    const [counter,dispatch] = useReducer(reducer,{count:0,text:false})
    return (
        <>
        <h1>{counter.count}</h1>
            <button className="btn btn-primamry" onClick={()=>{dispatch({type:"INCREMENT"}); dispatch({type:"TOGGLE"})}}>Add</button>
            <button className="btn btn-primamry" onClick={()=>{dispatch({type:"DECREMENT"}); dispatch({type:"TOGGLE"})}}>Minus</button>
            {counter
                .text && <h1>Hello</h1>}


        </>
    );
}

export default MainReducer;