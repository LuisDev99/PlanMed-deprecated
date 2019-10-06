/*
 * The reducer takes care of state changes in our app through actions
 */

//TODO: Implement LogOut

import Login_Action from "../Actions/login_actions";

const defaultState = {
    userInformation: null,
    isLoggedIn: false,
    loading: false,
    error: null
};

// Takes care of changing the application login state
const loginReducer = (state = defaultState, action) => {

    switch (action.type) {

        case Login_Action.Types.LOGIN_REQUEST_BEGIN: {

            /*
              When the user is requesting to log in, set the loading flag to true and the rest to null
            */


            let newState = {
                userInformation: null,
                isLoggedIn: false,
                loading: true,
                error: null
            };

            return newState;
        }

        case Login_Action.Types.LOGIN_REQUEST_SUCCESS: {

            /*
              If the user logged in successfully, then set the loading flag to false and error to null 
              and also set the userInfo to whatever the API responded to be able to access this user's role
            */

            let newState = {
                userInformation: action.payload,
                isLoggedIn: true,
                loading: false,
                error: null
            };

            /* Save the current user information to local storage to manage user session*/
            let serializedUserInformation = JSON.stringify(newState);
            localStorage.setItem("token", serializedUserInformation);

            return newState;
        }

        case Login_Action.Types.LOGIN_REQUEST_FAILED: {

            /* 
              If the user login failed, then set the error object to be whatever the API responded
              and set loading to false, and also set userInfo to null 
            */

            let newState = {
                userInformation: null,
                isLoggedIn: false,
                loading: false,
                error: action.payload
            };

            return newState;
        }

        case Login_Action.LOGOUT: {

            let newState = {
                userInformation: null,
                isLoggedIn: false,
                loading: false,
                error: null
            };

            /* Delete the user's session information from local storage*/
            localStorage.removeItem("token");

            return newState;
        }

        default:
            return state;
    }
};

export default loginReducer;