import React, { Component } from 'react';
import TermsOfService from '../Components/TermsOfService'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

export default class TermsOfServiceContainer extends Component {
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
        return <TermsOfService authenticated={this.state.authenticated} />
    }
}
