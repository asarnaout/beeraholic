import React, { Component } from 'react';
import AboutUs from '../Components/AboutUs'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

export default class AboutUsContainer extends Component {
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
        return <AboutUs authenticated={this.state.authenticated} />
    }
}