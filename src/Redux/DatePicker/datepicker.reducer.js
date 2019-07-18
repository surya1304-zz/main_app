import { actionTypes } from "./datepicker.actiontypes";

const INITIAL_STATE = {
    date : new Date(),
};

const DateReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SET_DATE:
            return{
                ...state,
                date : action.payload,
            };
        default:
            return state;
    }
};

export default DateReducer;
