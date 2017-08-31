import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './Loading.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './Reducers/main-reducer'
import Footer from './Components/Footer.js'

const store = createStore(reducers)

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

const PrivacyPolicy = Loadable({
  loader: () => import ('./Containers/PrivacyPolicyContainer.js'),
  loading: Loading,
});

const TermsOfService = Loadable({
  loader: () => import ('./Containers/TermsOfServiceContainer.js'),
  loading: Loading,
});

const ContactUs = Loadable({
  loader: () => import ('./Containers/ContactUsContainer.js'),
  loading: Loading,
});

const AboutUs = Loadable({
  loader: () => import ('./Containers/AboutUsContainer.js'),
  loading: Loading,
});

const CookiePolicy = Loadable({
  loader: () => import ('./Containers/CookiePolicyContainer.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="App">
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/signup" component={SignUp} />
              <Route path="/details/:beerId" component={Details} />
              <Route path="/privacypolicy" component={PrivacyPolicy} />
              <Route path="/termsofservice" component={TermsOfService} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/cookiepolicy" component={CookiePolicy} />
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>      
    );
  }
}

export default App;
