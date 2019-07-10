import React from 'react';
import {Switch,Route} from 'react-router-dom';
import NewSignIn from '../Components/SignIn/New_Signin';
import './App.css';

const App = () => {
        return (
            <Switch>
                <Route exact path='/' component={NewSignIn}/>
            </Switch>
        );
};

export default App;
