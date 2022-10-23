import React from 'react';
import '../css/Header.css';
import {FaPlane, FaWifi, FaMoon, FaBatteryFull} from "react-icons/fa"; 
import { BiBluetooth } from "react-icons/bi"
// import { useLocation } from "react-router-dom";



function Header ({className,head,leftitem,rightitem,span}) {
    // const locationNow = useLocation();
    // if (locationNow.pathname === "/Profile") return null;
    return(
    <header className={className}>
    <div className="status_bar">
        <div className="left_item">
            <FaPlane className="ico_s"/>
            <FaWifi className="ico_s"/>
        </div>
        <div className="center_item">
            <span>15</span>:<span>33</span>
        </div>
        <div className="right_item">
            <FaMoon className="ico_s"/>
            <BiBluetooth className="ico_s"/>
            <span>100%</span>
            <FaBatteryFull className="ico_s"/>
        </div>
    </div>
    <div className="title_bar">
        <h1 className="head">{head}<span className="span">{span}</span></h1>
        <div className="left_item">{leftitem}</div>
        <div className="right_item">{rightitem}</div>
    </div>
    </header>
    );
}


export default Header;