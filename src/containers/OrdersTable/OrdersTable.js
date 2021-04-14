import { React, Component } from 'react'
import classes from './OrdersTable.css'

class OrdersTable extends Component {
    render() {
        var ordersString = JSON.stringify(this.props.customer.orders)
        var orderRows = null
        var totalOrdersPrice = 0;
        if (ordersString !== undefined) {
            var ordersArray = JSON.parse(ordersString)
            orderRows = ordersArray.map(order => {
                var orderPrice = order.quantity * order.unitPrice
                totalOrdersPrice += orderPrice
                return <tr>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>${order.unitPrice}</td>
                    <td>${orderPrice}</td>
                </tr>
            })
        }
        return (
            <table className={classes.OrdersTable}>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
                {orderRows}
                <tr className={classes.TotalPriceRow}>
                    <td colSpan={3}></td>
                    <td>${totalOrdersPrice}</td>
                </tr>
            </table>
        )
    }
}

export default OrdersTable