import React from 'react';

function MainArrayComponent(props) {
    const [myName,setMyName]=React.useState(["Ravi","Sachin","Ravi"])
const [findColor,setFindColor]=React.useState(["red","green","blue"])
    const handelClick=()=>{
        const name=document.getElementById("thename").value;

setFindColor(name)
document.getElementById("thename").value="";

        setMyName(f=>[...f,name])
    }
    return (
        <>
            <div className="" style={{backgroundColor:findColor,height:"100vh",padding:"20px"}}>
        <h1>Array Component</h1>
            {myName.map((name1,index)=><div key={index}>{name1}</div>)}

            <input type="text" id={"thename"} className="input"/>
            <button className={"btn btn-primary ml-3 mt-3"} onClick={handelClick}>Add Name</button>
            </div>
        </>
    );
}

export default MainArrayComponent;