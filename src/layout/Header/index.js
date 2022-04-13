import React from "react";
import '../style.css'
import { FcBinoculars } from 'react-icons/fc';



const Header = () => {
    return(
        <header>
            <div id="logo">
            <h1><span className="lsvg"><FcBinoculars/></span> GitTracker</h1>
            </div>
        </header>
    )
}

export default Header;
