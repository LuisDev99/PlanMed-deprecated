import { applyMiddleware, createStore } from 'redux'
import rootReducer from './Reducers/root_reducer'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

//DONE 
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunkMiddleware));
    return store;
}