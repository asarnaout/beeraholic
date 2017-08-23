import React, { Component } from 'react';
import Card from '../Components/Card'
import axios from 'axios'
import config from '../config.js'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

class SignUpContainer extends Component{

    constructor(props) {
        super(props);
        this.auth();
        this.signUp = this.signUp.bind(this);
        this.inputEntered = this.inputEntered.bind(this);
        this.state = {
            FirstName: '',
            LastName: '',
            EmailAddress: '',
            Password: '',
            errorMessage: ''
        };
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();
        
        if(authenticated) {
            this.props.history.push('/search');
        }
    }

    async signUp(){
        let data = {
            emailAddress: this.state.EmailAddress,
            password: this.state.Password,
            firstName: this.state.FirstName,
            lastName: this.state.LastName
        };

        let result = await axios({
            method: 'post',
            url: config.apiEndpoint + 'account/signUp',
            data: data
        });
        
        if(result.data.success === true) {
            AuthenticationHelpers.setAuthenticationCookie(result.data.userKey);
            this.props.history.push('/search');
        } else {
            this.setState({errorMessage: result.data.message})
        }
    }

    inputEntered(value, id){
        let newState = {};
        newState[id] = value;
        this.setState(newState); 
    }

    render(){
        return (
            <Card header="Join Us" fields={[
                {value: 'First Name', password: false, id: "FirstName"},
                {value: 'Last Name', password: false, id: "LastName"}, 
                {value: 'Email Address', password: false, id: "EmailAddress"}, 
                {value: 'Password', password: true, id:"Password"}]} 
                actionButtonValue="Sign Up" actionButtonHandler={this.signUp} handleKeyPress={this.inputEntered} errorMessage={this.state.errorMessage}>
            </Card>
        );
    }
}

export default SignUpContainer;