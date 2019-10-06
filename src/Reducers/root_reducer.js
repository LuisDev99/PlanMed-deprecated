/**
 * In every reducer, a pattern is followed. 
 * When a function is called, usually that function handles data, that function will have three stages: BEGIN, SUCCESS, FAILED
 * Every stage is managed by the reducers
 * For example, suppose the user wants to get a patient's info
 * For that, we will have a function getPatientInfo
 * For that function, there will be three actions
 * GET_PATIENT_INFO_BEGIN, GET_PATIENT_INFO_SUCCESS, GET_PATIENT_INFO_FAILED
 * Why? Because we want to manage the state synchronously (using redux-thunk)
 * When a function (that involves data) is called and starts retrieving data from an API, the BEGIN action fires up, a loading flag is set to true (this can be used to let know the user visually that the data is being loaded)
 * If the API returned an error, the FAILED action fires up, returning the error and sets the loading flag to false
 * If no error occured, the SUCCESS action fires up and sets the loading flag to false
 * Please follow this pattern in every Component that needs Redux
 */

/**
* Resources:
* - How to combine redux with thunk: https://daveceddia.com/where-fetch-data-redux/
* - Code Example followed in this project: https://codesandbox.io/s/j3378m4v3y
* - Project example of redux with thunk: https://github.com/johnazre/youtube-intro-to-redux
* - Axios explanation: https://alligator.io/react/axios-react/
*/

import { combineReducers } from 'redux';
import loginReducer from './login_reducer';

//TODO: import all three reducers (login, hospital, doctor)

const rootReducer = combineReducers({
    //TODO: add here the imported reducers
    loginReducer
});

export default rootReducer;