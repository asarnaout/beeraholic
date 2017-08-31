import React, { Component } from 'react';
import CookiePolicy from '../Components/CookiePolicy'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

export default class CookiePolicyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: ''
        }
    }
    
    async componentDidMount(){
        this.setState({authenticated: await AuthenticationHelpers.authenticateUser() === true});
    }

    render() {
        return <CookiePolicy authenticated={this.state.authenticated} />
    }
}