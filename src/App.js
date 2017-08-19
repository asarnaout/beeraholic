import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading.js';
import './App.css';

const Home = Loadable({
  loader: () => import('./Views/Home/Home.js'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./Views/Dashboard/Dashboard.js'),
  loading: Loading,
});

const Details = Loadable({
  loader: () => import('./Views/Details/Details.js'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./Views/Home/SignUp.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/details/:beerId" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
