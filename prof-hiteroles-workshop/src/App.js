import React, { Component } from 'react';
import { ExperimentsHome } from './experiments';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router basename="experiments">
          {/* <Route path="/" component={null} /> */}
          <Route path="/" component={ExperimentsHome} />
        </Router>
    );
  }
}

export default App;
