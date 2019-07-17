import { actionTypes } from "./graphs.actions.type";

const INITIAL_STATE = {
    actual : '',
    est : '',
    inv : ''
};

const GraphsReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.SET_ACTUAL:
            return {
                ...state,
                actual : JSON.stringify(action.payload)
            };
        case actionTypes.SET_ESTIMATED:
            return {
                ...state,
                actual : JSON.stringify(action.payload)
            };
        case actionTypes.SET_INV:
            return {
                ...state,
                actual : JSON.stringify(action.payload)
            };
        default:
            return state;
    }
};

export default GraphsReducer;