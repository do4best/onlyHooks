import React from 'react';
import SentenceMake from "./SentenceMake.jsx";
import InputBoss from "./inputBoss.jsx";

function MainLetterCount(props) {
const [title,setTitle] = React.useState('');
const [result,setResult] = React.useState("")

const letCount=(title,result)=>{
    let count=0;
    for(let i=0;i<title.length;i++){
        if(title[i] === result){
            count++;
        }
    }
    return count;
}
const handelCount=()=>{
    console.log(title);

}
    return (
        <>
            <h1>Main Letter Count</h1>
            <input className={"input-md"} type="text" value={title} onChange={e => setTitle(e.target.value)}  placeholder="Enter a letter"/>
            <input className={"input-md ml-5"} type="text" value={result} maxLength={1} onChange={e => setResult(e.target.value)}
                   placeholder="Enter a letter"/>

           <h1 className={"text-info text-5xl"}> {letCount(title,result)}</h1>

        </>
    );
}

export default MainLetterCount;