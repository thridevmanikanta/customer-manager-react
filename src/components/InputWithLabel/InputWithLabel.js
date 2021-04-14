import { React } from "react";
import classes from "../InputWithLabel/InputWithLabel.css"

const inputWithLabel = (props) => {
    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            <input
                id={props.id}
                className={classes.Input}
                placeholder={props.placeholder}
                onChange={props.changed}
            />
        </div>
    )
}

export default inputWithLabel;