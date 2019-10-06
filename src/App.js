import React, { Component } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage"
import HospitalPage from "./Components/HospitalPage/HospitalPage"
import DoctorPage from "./Components/DoctorPage/DoctorPage"
import { Provider as ReduxProvider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRouter as PrivateRoute } from './Utilities/PrivateRouter';
import configureStore from "./store";

// Creates the Redux store using our reducers and the logger and thunk middlewares
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

//Add here all the components with its corresponding route
//If a component needs the user to be logged in in order to visit the page, 
//use the PrivateRoute component
const routing = (

  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <PrivateRoute path="/HospitalPage" component={HospitalPage}></PrivateRoute>
        <PrivateRoute path="/DoctorPage" component={DoctorPage}></PrivateRoute>
        <Route from="*" to="/" />
      </Switch>
    </div>
  </Router>

);

// Mostly boilerplate, except for the routing. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation(routes) etc
class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;