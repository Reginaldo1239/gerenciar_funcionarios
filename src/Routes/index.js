import React, { useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Employee from './Employees';
import EmployeeStore from './Employees/Store';
import { filterObject } from '../Utils/Helpers';



const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/employees`} component={Employee} />
        <Route exact path={`/employees/store`} component={EmployeeStore} />
        <Route exact path={`/employees/store/:id`} component={EmployeeStore} />
        <Route exact path={`*`} component={() => <div>page not found</div>} />
      </Switch>
    </Router>

  )
}

export default Routes;
