import { combineReducers } from 'redux';

import SigninReducer from './Signin/signin.reducer';

export default combineReducers({
    signin : SigninReducer,
});
