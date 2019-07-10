const INITIAL_STATE = {
    username : "",
    password : ""
};

const SigninReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "USERNAME_CHANGE":
            return {
                ...state,
                username : action.payload,
            };
        case "PASSWORD_CHANGE":
            return {
                ...state,
                password : action.payload,
            };
        default:
            return state;
    }
};

export default SigninReducer;