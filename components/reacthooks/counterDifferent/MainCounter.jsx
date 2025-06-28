import React from 'react';
import CustomeHook from "./customeHook.jsx";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice.js";
import AnotherHookCounter from "./anotherHookCounter.jsx";

function MainCounter(props) {
    // const [counter, setCounter] = React.useState(0);
    let newCounter = new CustomeHook(10)
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();

    return (
        <>
        <h1 className={"text-warning"}>Understanding Different Counter</h1>
            <button className="btn btn-primary mr-2 " onClick={()=>dispatch(increment())}>+</button>
            <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>-</button>
            <h1 className={"text-warning"}>{count}</h1>
            <AnotherHookCounter/>

        </>
    );
}

export default MainCounter;