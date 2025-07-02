import React from 'react';
import logo from "../../../../assets/logo.png"
import {Logo} from "./logo.jsx";
import {useNavigate} from "react-router-dom";
function Header(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={"grid grid-cols-12  "}>
            <div className="col-span-6 bg-white p-3 rounded shadow-xl" p-5>
                <Logo image={logo} title={"Note App"} subtitle={"React"} onClick={()=>navigate("/")} />
            </div><div className="col-span-6 ">
                    <button className="btn btn-lg btn-primary " onClick={()=>navigate("/")}>Add Note</button>

            </div>

            </div>

        </>
    );
}

export default Header;