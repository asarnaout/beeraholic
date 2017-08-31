import React, { Component } from 'react';
import PrivacyPolicy from '../Components/PrivacyPolicy'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

export default class PrivacyPolicyContainer extends Component {

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
        return <PrivacyPolicy authenticated={this.state.authenticated} />
    }
}