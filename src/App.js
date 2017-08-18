import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading.js';
import './App.css';

const HomeComponent = Loadable({
  loader: () => import('./Views/Home/Home.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
        <Route path="/" component={HomeComponent} />
        
        </div>
      </Router>
    );
  }
}

export default App;
