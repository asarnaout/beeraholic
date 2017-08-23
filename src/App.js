import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading.js';
import './App.css';

const Home = Loadable({
  loader: () => import('./Containers/HomeContainer.js'),
  loading: Loading,
});

const Search = Loadable({
  loader: () => import('./Containers/SearchContainer.js'),
  loading: Loading,
});

const Details = Loadable({
  loader: () => import('./Containers/DetailsContainer.js'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./Containers/SignUpContainer.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/signup" component={SignUp} />
          <Route path="/details/:beerId" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
