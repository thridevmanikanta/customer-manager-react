import React from "react";
import classes from "./Customer.css"
import Aux from "./../../hoc/Aux";
import { Link } from "react-router-dom";

const customer = (props) => {
    return (
        <Aux>
            <div className={classes.Customer}>
                <div className={classes.CustomerName}>
                    {props.name}
                </div>
                <p>{props.city}</p>
                <Link to={{
                    pathname: '/customer-order',
                    search: 'id=' + props.id
                }}>View {props.noOfOrders} Orders</Link>
            </div>
        </Aux>
    )
}

export default customer;