import { actionTypes } from './signin.actions.type'

const INITIAL_STATE = {
    username : "",
    password : ""
};

const SigninReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.USERNAME_CHANGE:
            return {
                ...state,
                username : action.payload,
            };
        case actionTypes.PASSWORD_CHANGE:
            return {
                ...state,
                password : action.payload,
            };
        default:
            return state;
    }
};

export default SigninReducer;