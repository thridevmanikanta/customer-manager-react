import axiosInstance from "./../../axios";
import { React, Component } from "react";
import Customer from "./../Customer/Customer";
import classes from "./CustomersList.css";

class CustomersList extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.fetchCustomerListFromDB()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.refresh !== this.props.refresh) {
            this.fetchCustomerListFromDB()
        }
    }

    fetchCustomerListFromDB = () => {
        axiosInstance.get('/customers.json').then(response => {
            this.setState({
                customers: Object.values(response.data)
            })
        })
    }

    render() {
        const customers = this.state.customers.map(customer => {
            var orderSize = 0
            if (customer.orders != null) {
                orderSize = customer.orders.length
            }
            return <div className={classes.Customer}>
                <Customer name={customer.fname + ' ' + customer.lname} city={customer.city} noOfOrders={orderSize} id={customer.id}/>
            </div>
        });
        return (
            <div className={classes.CustomersList}>
                {customers}
            </div>)
    }
}

export default CustomersList;