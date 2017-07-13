/**
 * Created by sertac.turkel on 13/07/2017.
 */
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

export default mathReducer;