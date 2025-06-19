import React, {useEffect} from 'react';

function List({getItem}) {
    const [item,setItem] = React.useState([]);
    useEffect(() => {
        setItem(getItem(5))
        console.log("Updating Item")

    },[getItem])
    return item.map((item)=><div key={item} className={"text-white"}>{item}</div>)
}

export default List;