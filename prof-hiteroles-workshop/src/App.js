import React, { Component } from 'react';
import Header from './Header';
import { ExperimentsHome } from './experiments';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Route path="/experiments" component={ExperimentsHome} />
        </Router>
    );
  }
}

export default App;
