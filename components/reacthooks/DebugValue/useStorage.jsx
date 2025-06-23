import React, {useDebugValue} from 'react';

function UseStorage(intialValue=0) {
    const [counter, setCounter] = React.useState(intialValue);
    useDebugValue(counter > 5?"highCount":"lowCount");
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    return {counter,increment,decrement}
}

export default UseStorage;