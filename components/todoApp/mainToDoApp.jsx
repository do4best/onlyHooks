import React from 'react';
import {v4 as uuidv4} from 'uuid';
import List from "./List.jsx";
function MainToDoApp(props) {
    const [text,setText] = React.useState('')
    const [list,setList] = React.useState([])
    const addItem=()=>{
        const newToDo = {
            id:uuidv4,
            text:text,done:false}
        setList([...list,newToDo])
        setText('')
    }
    const handelTodo=(itemId)=>{
        const newTodo = list.map((item)=>{
            if(item.id === itemId){
                return {...item,done:true}
            }
            return item;
        })
        setList(newTodo)
    }
    console.log(list);
    return (
        <>

        <h1>Main To Do App</h1>
            <div className="">
                <input type="text" className="input" value={text} onChange={e => setText(e.target.value)}/>
                <button className="btn btn-primary" onClick={addItem}> Add Find</button>
                <List todoList={list} handelToggle={handelTodo}/>
            </div>
        </>
    );
}

export default MainToDoApp;