import React from 'react';
import {Switch,Route} from 'react-router-dom';
import NewSignIn from '../Components/SignIn/New_Signin';
import ResponsiveDrawer from '../Components/Sidebar/sidebar.component';
import './App.css';

const App = () => {
        return (
            <Switch>
                <Route exact path='/' component={NewSignIn}/>
                <Route exact path='/sidebar' component={ResponsiveDrawer} />
            </Switch>
        );
};

export default App;
