import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Interface from './components/Interface';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Landing} />
        <Route path='/:portal' component={Interface} />
      </div>
    );
  }
}

export default App;
