import React, {useDebugValue, useState} from 'react';
import useStorage from "./useStorage.jsx";

function MainDebugValueHook() {
    const data = useStorage();
   return(<>
       <h1>Value is {data.counter}</h1>
           <button className="btn btn-primary" onClick={data.increment}>Increment</button>
           <button className="btn btn-primary" onClick={data.decrement}>Increment</button>

       </>

    );
}

export default MainDebugValueHook;