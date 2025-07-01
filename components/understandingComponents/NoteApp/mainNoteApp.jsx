import React from 'react';
import TextAreaBox from "./textAreaBox.jsx";

function MainNoteApp(props) {
    const [createdNote,setCreatedNote]=React.useState("")
    const handelCreateNote=()=>{
        const  objNote={
            id:Math.floor(Math.random()*100000)
            ,content:""
        }
        const warning = alert("Note Created")
        if (warning)
        console.log(objNote)
    }
    const handelDeleteNote=(index,element)=>{
        
    }
    const handelDouble=()=>{
        const warning = alert("Note Double Clicked")
        if (warning)
        handelDeleteNote(index, element)
    }
    return (
        <>
            <div className="bg-linear-to-r from-blue-300 to-green-300 font-serif m-0">
            <h1 className={"text-blue-800 text-center pt-10 text-4xl"}>Note App</h1>
            <p className={"text-center text-blue-800 text-xl"}>Double Click on a note App</p>
                <div className="grid grid-cols-2 gap-[40px] justify-center p-10">
            <TextAreaBox/>
                    <TextAreaBox/>
                    <TextAreaBox/>
                    <TextAreaBox/>
                    <TextAreaBox/>
                </div>
            <button className="btn hover:bg-transparent h-[200px] w-[200px] text-4xl rounded-3xl" onDoubleClick={handelDouble} onClick={handelCreateNote}>+</button>
            </div>
        </>
    );
}

export default MainNoteApp;