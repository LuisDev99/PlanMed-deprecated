import { combineReducers } from 'redux';
import loginReducer from './login_reducer';

//TODO: import all three reducers (login, hospital, doctor)

const rootReducer = combineReducers({
    //TODO: add here the imported reducers
    loginReducer
});

export default rootReducer;