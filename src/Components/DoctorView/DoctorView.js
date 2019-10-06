import {
    withStyles,
    TextField,
    Button,
    FormControl,
} from "@material-ui/core";
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonAppBar from "../Utilities/ButtonAppBar";
import Login_Action from '../../Actions/login_actions';
import { Redirect } from 'react-router-dom';


//TODO: implement the Doctor design
//TODO: Implement redux's things

class DoctorView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    //Checks to see if the current user has a open session by reading the local storage token
    loadLocalUserData() {

        const token = localStorage.getItem("token");
        let _isLoggedIn = false;

        if (token != null) {
            let serializedUserInformation = JSON.parse(token);
            _isLoggedIn = serializedUserInformation.isLoggedIn;
        }

        this.setState({
            isLoggedIn: _isLoggedIn
        })
    }

    //Before the component renders, load the user's local data (if he has one)
    componentWillMount() {
        this.loadLocalUserData();
    }

    /*
        Everytime the component re-renders, load the user's local data (if he has one)
        to redirect automatically to the user's corresponding role screen
    */
    componentDidUpdate() {
        this.loadLocalUserData();
    }

    render() {

        if (this.state.isLoggedIn === false) {
            window.alert("No has iniciado sesion. Haz inicio de sesion para poder ingresar a esta pagina");
            return <Redirect to="/"></Redirect>
        }

        return (
            <div>
                <ButtonAppBar />
            </div>
        );
    }
}


export default withRouter(DoctorView);
