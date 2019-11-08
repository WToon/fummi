
import React, { Component } from 'react';
import LoginScreen from '../screens/LoginScreen';
import PlayListScreen from '../screens/PlayListScreen'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={LoginScreen} />
                        <Route path="/playListScreen/:userId" component={PlayListScreen} />
                        
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        );
    }

}



export default App;
