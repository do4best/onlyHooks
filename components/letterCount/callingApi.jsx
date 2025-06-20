import React from 'react';
import {useEffect, useState} from 'react'
function CallingApi(props) {
    // async function getit(){
//    const result= fetch('https://api.github.com/users').then(res => res.json()).then((data) => {console.log('success',data)}).catch((error) => {console.error(error)})
// return result.data;
// }
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then((data) => {setData(data)})
    },[])

    return (
        <>
            <button className="btn btn-primary">Hello</button>
            <ul>
                {data?.map((item, i) => (<li key={i}>{item.title}</li>))}
            </ul>
        </>
    );
}

export default CallingApi;