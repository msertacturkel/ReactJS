/**
 * Created by sertac.turkel on 13/07/2017.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger,thunk,promise()));
