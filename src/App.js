import React from 'react';
import Header from './Header';
import { ExperimentsHome } from './experiments';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
          <Header />
          <Route exact={false} path="/experiments" component={ExperimentsHome} />
        </Router>
    );
}

export default App;
