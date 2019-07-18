import { actionTypes } from "./graphs.actions.type";

const INITIAL_STATE = {
    actual : '',
    est : '',
    inv : '',
    keys : ''
};

const GraphsReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.SET_ACTUAL:
            return {
                ...state,
                actual : action.payload
            };
        case actionTypes.SET_ESTIMATED:
            return {
                ...state,
                est : action.payload
            };
        case actionTypes.SET_INV:
            return {
                ...state,
                inv : action.payload
            };
        case actionTypes.SET_KEYS:
            return {
                ...state,
                keys : action.payload
            };
        default:
            return state;
    }
};

export default GraphsReducer;