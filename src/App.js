import React from "react";
import Aux from "./hoc/Aux";
import AddCustomer from "./containers/AddCustomer/AddCustomer";
import classes from "./App.css"

const app = (props) => (
  <Aux>
    <div>
      Toolbar
    </div>
    <main className={classes.Content}>
      <AddCustomer />
    </main>
  </Aux>
);


export default app;
