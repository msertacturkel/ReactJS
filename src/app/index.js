import { createStore } from "redux";
const initialState = {
    results: 1,
    lastValues: [],
    username: "Max"
};
const reducer = (state = initialState,action)=>{
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result:state.results + action.payload,
                lastValues: [...state.lastValues,action.payload]
            };

            break;
        case "SUBTRACT":
            state = {
                ...state,
                result:state.results - action.payload,
                lastValues: [...state.lastValues,action.payload]
            };
            break;
    }
    return state;
};
const store = createStore(reducer);
store.subscribe(()=>{
    console.log("Store updated!",store.getState());
})
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "SUBTRACT",
    payload: 82
});