import React from 'react';
import {MdDelete, MdDoneOutline} from "react-icons/md";

function List({todoList,handelToggle}) {
    return (
        <>
            <ul className="list bg-base-100 rounded-box shadow-md mt-5">

                {todoList.map((listitem)=>(
                <div>
                    <li className={"list-row flex justify-between bg-white text-black     items-center"} key={listitem.id}>

                    <div className="text-xs uppercase font-semibold opacity-60 ">{listitem.text}</div>

                           <MdDoneOutline size={50} onClick={()=>handelToggle(listitem.id)}/>
                  <MdDelete size={50} />

                      <span>

                      </span>
                    </li>
                </div>))}

            </ul>
        </>
    );
}

export default List;