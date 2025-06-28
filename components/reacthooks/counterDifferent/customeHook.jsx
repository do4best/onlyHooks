import React from 'react';

function CustomeHook(count=0) {
    const [counter, setCounter] = React.useState(count);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

        return {counter,increment,decrement}
}

export default CustomeHook;