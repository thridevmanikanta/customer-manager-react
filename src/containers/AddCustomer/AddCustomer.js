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
        city: '',
        validCustomerInput: false
    }

    addCustomerHandler = (event) => {
        event.preventDefault()
        var customer = this.state
        customer.id = uuidV4()
        axiosInstance
            .post('/customers.json', this.state)
            .then(response => {
                this.props.customerAdded()
                document.getElementById('add-customer-form').reset()
                this.setState({
                    validCustomerInput: false
                })
            })
            .catch(error => console.log(error))
    }

    isCustomerDataValid = () => {
        if (this.state.fname !== '' && this.state.lname !== '' && this.state.city !== '') {
            this.setState({
                validCustomerInput: true
            })
        } else {
            this.setState({
                validCustomerInput: false
            })
        }
    }

    inputChangedHandler = (event) => {
        var whatChanged = event.target.id;
        switch (whatChanged) {
            case 'fnameinput':
                this.setState({
                    fname: event.target.value
                }, this.isCustomerDataValid);
                break;
            case 'lnameinput':
                this.setState({
                    lname: event.target.value
                }, this.isCustomerDataValid);
                break;
            case 'cityinput':
                this.setState({
                    city: event.target.value
                }, this.isCustomerDataValid);
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
                <form id='add-customer-form' className={classes.CustomerInputForm} onSubmit={this.addCustomerHandler}>
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
                    <button disabled={!this.state.validCustomerInput} type="submit" onClick={this.addCustomerHandler.bind(this)}>Add Customer</button>
                </form>
            </Aux>
        );
    }
}

export default AddCustomer;