import React, {useCallback} from 'react';
import List from "./List.jsx";

function UnderstandCallBack() {
    const [number, setNumber] = React.useState(0)
    const [dark, setDark] = React.useState(false)
    const getItem=useCallback((increment)=>{
        return [number+increment, number + 1+increment, number + 2+increment]
    },[number])
    const theme = {
        backgroundColor:dark ? '#FFF': '#333',
        color:dark? '#FFF': '#333'
    }
    return (
        <>
<div className="text-white" style={theme}>
    <fieldset className="fieldset ">
        <legend className="fieldset-legend">What is your name?</legend>
        <input type="number" className="input " placeholder="Type here" value={number} onChange={event =>setNumber(parseInt(event.target.value))} />
        <button className="" onClick={()=>setDark(preDarl => !preDarl)}>Toggle Theme</button>
    </fieldset>
    <List getItem={getItem}  />
</div>

        </>
    );
}

export default UnderstandCallBack;