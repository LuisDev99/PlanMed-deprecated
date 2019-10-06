import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * This is use to check if the user has a token in local storage
 * If a token exists, the user has permission to redirect to his desire destination,
 * Therefore, this function will return the page where the user was headed, else, it will return the login page
 * Use this privateRoute method in every page that requires user login authentication
 * @param {object} props The new route information 
 */
export const PrivateRouter = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />

    )} />
) //TODO: Hospital User can access DoctorView and viceversa, handle that verification in here