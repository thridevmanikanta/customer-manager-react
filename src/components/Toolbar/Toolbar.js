import React from "react";
import classes from "./Toolbar.css"
import Logo from "./../Logo/Logo"
import NavigationItem from "./../NavigationItem/NavigationItem"

const toolbar = (props) =>
    <div>
        <header className={classes.Toolbar}>
            <Logo />
            <nav>
                <ul className={classes.NavigationItems}>
                    <NavigationItem link='/' exact>Customers</NavigationItem>
                    <NavigationItem link='/orders'>Orders</NavigationItem>
                </ul>
            </nav>
        </header>
    </div>

export default toolbar;