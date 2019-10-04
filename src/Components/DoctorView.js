import {
    withStyles,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


//TODO: implement the Doctor design
//TODO: Implement redux's things

class DoctorView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                DoctorView
            </div>
        );
    }
}

export default withRouter(DoctorView);
