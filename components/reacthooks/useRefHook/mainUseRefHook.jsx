import React, {useRef,useLayoutEffect} from 'react';

function MainUseRefHook() {
    const inputRef = useRef();
    return (
        <>
        <h1>UnderStanding Ref Hook</h1>
            <div className="mt-5">
            <input type="text" placeholder={"Enter Your Name"} className=" input input-primary "/>
            <button className="btn btn-primary ml-1">Add It</button>
            </div></>
    );
}

export default MainUseRefHook;