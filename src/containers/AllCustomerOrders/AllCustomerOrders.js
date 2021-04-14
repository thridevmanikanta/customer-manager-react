import { Component, React } from 'react'
import classes from './AllCustomerOrders.css'
import axiosInstance from './../../axios'
import Aux from "./../../hoc/Aux";
import OrdersTable from '../OrdersTable/OrdersTable';

class AllCustomerOrders extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        axiosInstance
            .get('/customers.json')
            .then(response => this.setState({
                customers: Object.values(response.data)
            }))
    }

    render() {
        const customersOrders = this.state.customers.map(customer => {
            return <div className={classes.OrdersDiv}>
                <h3>{customer.fname + ' ' + customer.lname}</h3>
                <OrdersTable customer={customer} />
            </div>
        })
        return (
            <Aux>
                <div className={classes.Heading}>
                    <h1>All Customer Orders</h1>
                </div>
                {customersOrders}
            </Aux>
        )
    }
}

export default AllCustomerOrders