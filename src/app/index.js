import {createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger"

const mathReducer = (state = {
    results: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.results + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.results - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age:27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };

            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};
const myLogger = (store) => (next) =>(action) => {
    console.log("Logged Action: ",action);
    next(action);
};
const store = createStore(combineReducers(
    {mathReducer,userReducer}),
    {},
    applyMiddleware(myLogger,logger));
store.subscribe(() => {
    console.log("Store updated!", store.getState());
})
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "SUBTRACT",
    payload: 82
});
store.dispatch({
    type: "SET_AGE",
    payload: 30
});