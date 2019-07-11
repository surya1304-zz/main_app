import React from 'react';
import {Switch,Route} from 'react-router-dom';
import NewSignIn from '../Components/SignIn/New_Signin';
import MiniDrawer from '../Components/Sidebar/sidebar.component';
import PlantTiles from '../Components/Tiles/tiles.component';
import './App.css';

const App = () => {
        return (
            <Switch>
                <Route exact path='/' component={NewSignIn}/>
                <Route exact path='/sidebar' component={MiniDrawer} />
                <Route exact path='/plants/:plantname' component={PlantTiles}/>
            </Switch>
        );
};

export default App;
