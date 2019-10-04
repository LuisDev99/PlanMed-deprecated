import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login"
import HospitalView from "./Components/HospitalView"
import DoctorView from "./Components/DoctorView"
import { Provider as ReduxProvider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import configureStore from "./store";

//DONE ?

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (

  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/HospitalView" component={HospitalView}></Route>
        <Route path="/DoctorView" component={DoctorView}></Route>
      </Switch>
    </div>
  </Router>

);

class App extends Component {
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