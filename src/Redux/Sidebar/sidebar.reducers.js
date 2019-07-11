import { actionTypes } from "./sidebar.actions.type";

const INITIAL_STATE = {
    open : false,
};

const SidebarReducer = (state=INITIAL_STATE, action) => {
    switch(action.type)
    {
        case actionTypes.SET_OPEN:
            return {
                ...state,
                open : action.payload,
            };
        default:
            return state;
    }
};

export default SidebarReducer;