import {
    withStyles,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


//TODO: implement the Hospital design
//TODO: Implement redux's things

class HospitalView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                HospitalView
            </div>
        );
    }
}

export default withRouter(HospitalView);
