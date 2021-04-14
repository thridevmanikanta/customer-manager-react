import { React, Component } from 'react'
import Aux from "./hoc/Aux";
import AddCustomer from "./containers/AddCustomer/AddCustomer";
import classes from "./App.css"
import CustomerList from "./../src/containers/CustomersList/CustomersList";
import Toolbar from './../src/components/Toolbar/Toolbar'
import { BrowserRouter, Route } from 'react-router-dom'
import SingleCustomerOrder from './containers/SingleCustomerOrder/SingleCustomerOrder'
import AllCustomerOrders from "./containers/AllCustomerOrders/AllCustomerOrders";

class App extends Component {
  state = {
    customerListNeedsToRefresh: false
  }

  customerAdded = () => {
    this.setState({
      customerListNeedsToRefresh: true
    })
  }

  render() {
    var customersList = this.state.customerListNeedsToRefresh ? <CustomerList refresh /> : <CustomerList />
    return (
      <BrowserRouter>
        <Toolbar />
        <main className={classes.Content}>
          <Route path='/' exact render={() =>
            <Aux>
              <AddCustomer customerAdded={this.customerAdded} />
              {customersList}
            </Aux>
          } />
          <Route path='/customer-order' component={SingleCustomerOrder} />
          <Route path='/orders' component={AllCustomerOrders}/>
        </main>
      </BrowserRouter>
    )
  }
};


export default App;
