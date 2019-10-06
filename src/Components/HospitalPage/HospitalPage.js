import {
    withStyles,
    TextField,
    Button,
    FormControl,
} from "@material-ui/core";
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonAppBar from "../../Utilities/ButtonAppBar";


//TODO: implement the Doctor design
//TODO: Implement redux's things

class HospitalPage extends Component {

    //Logout functionality is handle by the ButtonAppBar

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
                <ButtonAppBar />
            </div>
        );
    }
}


export default withRouter(HospitalPage);
