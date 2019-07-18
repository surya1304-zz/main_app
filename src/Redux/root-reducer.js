import { combineReducers } from 'redux';

import SigninReducer from './Signin/signin.reducer';
import SidebarReducer from "./Sidebar/sidebar.reducers";
import GraphsReducer from './Graphs/graphs.reducer';
import DateReducer from './DatePicker/datepicker.reducer';

export default combineReducers({
    signin : SigninReducer,
    sidebar : SidebarReducer,
    graph : GraphsReducer,
    date : DateReducer,
});
