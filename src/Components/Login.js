import {
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import React, { Component } from 'react';
import Login_Action from '../Actions/login_actions';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

//TODO: implement the login design
//TODO: If the user exist, redirect to the corresponding page according to the user's role

const mapStateToProps = (state) => {

    return {
        userInformation: state.loginReducer.userInformation,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    };
}

const mapDispatchToProps = dispatch => ({
    r_handleLogin: userAuthentication => dispatch(Login_Action.loginUser(userAuthentication))
});

class Login extends Component {


    handleLogin = () => {
        let userAuthentication = {
            username: '', //TODO: grab the username textfield and set it to this variable
            password: ''  //TODO: grab the password textfield and set it to this variable
        };

        this.props.r_handleLogin(userAuthentication);
    }

    render() {
        let userName = this.props.userInformation != null ? this.props.userInformation.name : 'Hey, temporary value';
        return (
            <div>
                Whatsup
                <br />
                {userName}
                <Button onClick={this.handleLogin} color="primary" >
                    Test
                </Button>
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
