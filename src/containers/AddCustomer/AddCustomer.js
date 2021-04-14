import { React, Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "../AddCustomer/AddCustomer.css";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import axiosInstance from "./../../axios";
import { v4 as uuidV4 } from "uuid";

class AddCustomer extends Component {

    state = {
        fname: '',
        lname: '',
        city: ''
    }

    addCustomerHandler = (event) => {
        event.preventDefault()
        var customer = this.state
        customer.id = uuidV4()
        axiosInstance
            .post('/customers.json', this.state)
            .then(response => {
                this.props.customerAdded()
            })
            .catch(error => console.log(error))
    }

    inputChangedHandler = (event) => {
        var whatChanged = event.target.id;
        switch (whatChanged) {
            case 'fnameinput':
                this.setState({
                    fname: event.target.value
                });
                break;
            case 'lnameinput':
                this.setState({
                    lname: event.target.value
                });
                break;
            case 'cityinput':
                this.setState({
                    city: event.target.value
                });
                break;
            default:
                console.log('Not a valid input');
                break;
        }
    }

    render() {
        return (
            <Aux>
                <div className={classes.CustomersHeading}>
                    <h1>Customers</h1>
                </div>
                <form className={classes.CustomerInputForm} onSubmit={this.addCustomerHandler}>
                    <InputWithLabel
                        id='fnameinput'
                        label="First Name:"
                        placeholder="First Name"
                        changed={this.inputChangedHandler} />
                    <InputWithLabel
                        id='lnameinput'
                        label="Last Name:"
                        placeholder="Last Name"
                        changed={this.inputChangedHandler} />
                    <InputWithLabel
                        id='cityinput'
                        label="City:"
                        placeholder="Customer City"
                        changed={this.inputChangedHandler} />
                    <button type="submit" onClick={this.addCustomerHandler.bind(this)}>Add Customer</button>
                </form>
            </Aux>
        );
    }
}

export default AddCustomer;