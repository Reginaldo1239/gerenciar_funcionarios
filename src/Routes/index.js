import React, { useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Employee from './Employees';
import EmployeeStore from './Employees/Store';
import Header from '../Components/Header';
import Content from "../Components/Content";
import Footer from "../Components/Footer";


const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route exact path={`/employees`} component={Employee} />
          <Route exact path={`/employees/store`} component={EmployeeStore} />
          <Route exact path={`/employees/store/:id`} component={EmployeeStore} />
          <Route exact path={`*`} component={() => <div>page not found</div>} />
        </Switch>
      </Content>
      <Footer />
    </Router>

  )
}

export default Routes;
