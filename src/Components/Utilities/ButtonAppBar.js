import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Login_Action from '../../Actions/login_actions';
import { connect } from "react-redux";

/**
 * Class that returns a material UI App Bar
 * Given that all the components that needs an appbar require the same functionality (just the logout button that calls the same function),
 * this component needs to be in the utilities folder
 */
class ButtonAppBar extends Component {

    /*
        If the user clicked the logout button, then call the reducer logout function
        and then redirect the user to the login page
     */
    handleLogout = () => {
        this.props.r_handleLogout();
        window.location = '/'; //Redirect to the login page
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            Bienvenido
                        </Typography>
                        <Button color="inherit" onClick={this.handleLogout}>Cerrar Sesion</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
});

//Redux configuration stuff
const mapStateToProps = (state) => {

    return {

    };
}

//Redux configuration stuff
const mapDispatchToProps = dispatch => ({
    r_handleLogout: () => dispatch(Login_Action.logoutUser())
});

//export default ButtonAppBar;
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ButtonAppBar));
