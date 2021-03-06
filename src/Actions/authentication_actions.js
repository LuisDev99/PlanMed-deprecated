//TODO: implement login actions (Just Login) - Almost done, just missing to connect to the real API endpoint (by changing the variable 'backendURL')

import axios from 'axios';

/**
 * This functions gets called from the Login Component whenever the user wants to login
 * It will dispatch an action according to what the API responds
 * @param  {object} userAuthentications The user's username and password 
 * @param  {string} userAuthentications.username The new text of the username input field of the form
 * @param  {string} userAuthentications.password The new text of the password input field of the form
 */
function loginUser(userAuthentications) {
    console.log(userAuthentications);
    return dispatch => {

        //Notify the reducer that the user is logging in by calling the action 'onLoggingIn'
        dispatch(onLoggingIn());

        //TODO: let backendURL = 'http://nuestroBackend.com/Usuarios/{userAuthentications}'; -> This will be the real connection endpoint url once we implement the backend to a server
        let backendURL = 'https://jsonplaceholder.typicode.com/users/2';

        //Fetch the API the user's information that got passed in using axios' get method
        axios.get(backendURL)
            .then(user => {

                /* 
                    If the credentials of the user are correct, notify the reducer that the login was successful
                    by calling the action 'onLoginSuccess' 
                */

                dispatch(onLoginSuccess(user.data));

                //Redirect the user to its corresponding page based on his role
                if (user.data.id === 1) //TODO: This should verify user.data.ROLE instead of data.id
                    window.location = '/DoctorPage';
                else if (user.data.id === 2)
                    window.location = '/HospitalPage';
                else
                    window.location = '/';

            })
            .catch(error => {

                /*
                    If the credentials of the user are NOT correct, notify the reducer that the login failed
                    by calling the action 'onLoginFailed' 
                */

                dispatch(onLoginFailed(error));
            });
    };

}

/**
 * This function will call the reducer and logout the user, and redirect the user to the login page
 * It will dispacth the logOut function
 */
function logoutUser() {
    return dispatch => {
        dispatch(logOut());
    }
}

/**
 * Notifies the reducer that the user started to log in
 */
const onLoggingIn = () => ({
    type: Types.LOGIN_REQUEST_BEGIN
});

/**
 * Notifies the reducer that the user login was successful
 * @param  {object} userInformation All the information that the API returned about the user who logged in 
 */
const onLoginSuccess = userInformation => ({
    type: Types.LOGIN_REQUEST_SUCCESS,
    payload: userInformation
});

/**
 * Notifies the reducer that the user login failed
 * @param  {object} error The error object that the API returned 
 */
const onLoginFailed = error => ({
    type: Types.LOGIN_REQUEST_FAILED,
    payload: error
});

/**
 * Notifies the reducer that the user wants to logout, 
 * therefore, the reducer will delete the user's token
 */
const logOut = () => ({
    type: Types.LOGOUT
});


// types of action
const Types = {
    LOGIN_REQUEST_BEGIN: "LOGIN_REQUEST_BEGIN",
    LOGIN_REQUEST_SUCCESS: "LOGIN_REQUEST_SUCCESS",
    LOGIN_REQUEST_FAILED: "LOGIN_REQUEST_FAILED",
    LOGOUT: "LOGOUT"
};

//Export everything in this file into a single object
export default {
    logOut,
    onLoggingIn,
    onLoginSuccess,
    onLoginFailed,
    loginUser,
    logoutUser,
    Types
};

