import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

/**
 * Functional component that returns a material UI progress bar only if 'isLoading' is set to true
 * If not, it returns an empty div
 * @param {object} props Properties
 * @param {boolean} props.isLoading Boolean property that decides if the progress bar should be render
 */
function LoadingBar(props) {

    const classes = useStyles();

    if (props.isLoading) {

        return (
            <div className={classes.root}>
                <LinearProgress />
            </div>
        );

    } else {

        return (
            <div>
            </div>
        );

    }
}

LoadingBar.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

export default LoadingBar;