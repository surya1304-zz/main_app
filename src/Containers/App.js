import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NewSignIn from '../Components/SignIn/New_Signin';
import './App.css';

const App = () => {
        return (
            <Route exact path='/' component={NewSignIn}/>
        );
};

export default App;
