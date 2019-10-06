import React, { Component } from 'react';
import Login_Action from '../Actions/login_actions';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            userInformation: null,
            username: '',
            password: ''
        }
    }

    handleChangingUsernameText = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangingPasswordText = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleLogin = () => {
        console.log(this.state);
        let userAuthentication = {
            username: this.state.username, //TODO: grab the username textfield and set it to this variable
            password: this.state.password  //TODO: grab the password textfield and set it to this variable
        };

        this.props.r_handleLogin(userAuthentication);
    }

    Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://planmed.hn">
                    PlanMed HN
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    loadLocalUserData() {
        //check to see if the current user has a open session by reading local storage token
        const token = localStorage.getItem("token");

        if (token != null) {
            let serializedUserInformation = JSON.parse(token);
            this.setState({
                isLoggedIn: serializedUserInformation.isLoggedIn,
                userInformation: serializedUserInformation.userInformation
            })
        }
    }

    componentDidMount() {
        this.loadLocalUserData(); //New react code
    }

    //React is going to deprecate this lifecycle method
    componentDidUpdate() {
        this.loadLocalUserData();
    }

    render() {

        /** TODO: Implement this, by uncommenting this and using the role of the user whenever the API is ready
        if (this.state.isLoggedIn) {
            if (this.state.userInformation.role == "Doctor") {
                return <Redirect to="/DoctorView"></Redirect>
            } else if (this.state.userInformation.role == "Hospital") {
                return <Redirect to="/HospitalView"></Redirect>
            }
        } 
        */


        //TODO: delete this when API is ready
        if (this.state.isLoggedIn) {
            if (this.state.userInformation.id === 1) {
                return <Redirect to="/DoctorView"></Redirect>
            } else if (this.state.userInformation.id === 2) {
                return <Redirect to="/HospitalView"></Redirect>
            }
        }

        const { classes } = this.props;
        const linearProgress = <div className={classes.root}> <LinearProgress /> </div>;

        //If the api is loading, show a loading bar on top of the screen
        let loadingBar = this.props.loading ? linearProgress : <div></div>;

        return (
            <div>
                {loadingBar}
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
                                onChange={this.handleChangingUsernameText}
                                value={this.state.username}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="usuario"
                                label="Usuario"
                                name="usuario"
                                autoComplete="username"
                                autoFocus
                            />
                            <TextField
                                onChange={this.handleChangingPasswordText}
                                value={this.state.password}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="contraseña"
                                label="Contraseña"
                                type="password"
                                id="contraseña"
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
                                    Si olvidaste tu contaseña, contacta a PlanMed para recuperar tu contraseña
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        {this.Copyright}
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
    r_handleLogin: userAuthentication => dispatch(Login_Action.loginUser(userAuthentication))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Login)));
