import React, { Component } from 'react';
import Auth_Action from '../../Actions/authentication_actions';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import LoadingBar from '../../Utilities/LoadingBar'


class LoginPage extends Component {

    constructor(props) {
        super(props);

        //Reset the authorization state (if any exists)
        this.props.r_handleLogout();

        this.state = {
            isLoggedIn: false,
            userInformation: null,
            username: '',
            password: ''
        }

    }

    handleInputChange = (event) => {
        const { name, txtValue } = event.target;
        this.setState({ [name]: txtValue });
    }

    /*
        When the user clicks the login button, this function gets call.
        It will call the reducer to handle the credentials
    */
    handleLogin = () => {
        console.log(this.state);
        let userAuthentication = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.r_handleLogin(userAuthentication);
    }


    render() {

        const { classes } = this.props;

        return (
            <div>
                <LoadingBar isLoading={this.props.loading} />

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Entrar al sistema de proveedores de PlanMed
                    </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                onChange={this.handleInputChange}
                                value={this.state.username}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Usuario"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="contraseña-actual"
                            />
                            <br />
                            <br />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleLogin} >
                                Iniciar Sesion
                            </Button>
                            <br />
                            <br />
                            <br />
                            <Grid container>
                                <Grid item xs>
                                    Si olvidaste tu usuario o contaseña, contacta a PlanMed para recuperar tu cuenta
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        );
    }

}


const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    root: {
        flexGrow: 1,
    },
});


//Redux configuration stuff
const mapStateToProps = (state) => {

    return {
        userInformation: state.loginReducer.userInformation,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    };
}

//Redux configuration stuff
const mapDispatchToProps = dispatch => ({
    r_handleLogin: userAuthentication => dispatch(Auth_Action.loginUser(userAuthentication)), //The r_ stands for reducer
    r_handleLogout: () => dispatch(Auth_Action.logoutUser())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(LoginPage)));
