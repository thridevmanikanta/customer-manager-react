import { Component, React } from 'react'
import classes from './SingleCustomerOrder.css'
import axiosInstance from './../../axios'
import Aux from "./../../hoc/Aux";
import OrdersTable from './../OrdersTable/OrdersTable'

class SingleCustomerOrder extends Component {
    state = {
        customer: {}
    }

    componentDidMount() {
        axiosInstance
            .get('/customers.json?orderBy="id"&equalTo="' + new URLSearchParams(this.props.location.search).get('id') + '"')
            .then(response => this.setState({
                customer: Object.values(response.data)[0]
            }))
    }

    render() {
        return (
            <Aux>
                <div className={classes.Heading}>
                    <h1>Customer Orders</h1>
                </div>
                <div className={classes.OrdersDiv}>
                    <h3>Orders for {this.state.customer.fname + ' ' + this.state.customer.lname}</h3>
                    {this.state.customer.city}
                    <OrdersTable customer={this.state.customer}/>
                </div>
            </Aux>
        )
    }
}

export default SingleCustomerOrder