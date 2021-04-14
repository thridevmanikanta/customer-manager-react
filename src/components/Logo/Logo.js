import React from "react";
import cmLogo from "./../../assets/images/cm.png";
import classes from "./Logo.css";

const logo = () => 
    <div className={classes.Logo}>
        <img src={cmLogo} alt="Customer manager logo"/>
        <text>Customer Manager</text>
    </div>

export default logo;