import { combineReducers } from 'redux';

import SigninReducer from './Signin/signin.reducer';
import SidebarReducer from "./Sidebar/sidebar.reducers";

export default combineReducers({
    signin : SigninReducer,
    sidebar : SidebarReducer,
});
