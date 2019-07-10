import { actionTypes } from './signin.actions.type'

const INITIAL_STATE = {
    username : "",
    password : "",
    fname : "",
    role : "",
    plants : ""
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
        case actionTypes.RESPONSE_RECEIVED:
            return{
                ...state,
                fname : action.payload.fname,
                role : action.payload.role,
                plants :action.payload.plants,
            };
        default:
            return state;
    }
};

export default SigninReducer;