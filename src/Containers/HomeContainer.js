import React, { Component } from 'react';
import Card from '../Components/Card'
import config from '../config.js'
import JoinNow from '../Components/JoinNow'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import axios from 'axios'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.auth();
        this.login = this.login.bind(this);
        this.inputEntered = this.inputEntered.bind(this);
        this.state = {
            EmailAddress: '',
            Password: '',
            errorMessage : ''
        };
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();
        
        if(authenticated) {
            this.props.history.push('/search');
        }
    }

    async login() {
        let data = {
            emailAddress: this.state.EmailAddress,
            password: this.state.Password
        };

        let result = (await axios({
            method: 'post',
            url: config.apiEndpoint + 'account/signin',
            data: data
        })).data;

        if(result.success) {
            AuthenticationHelpers.setAuthenticationCookie(result.userKey);
            this.props.history.push('/search');
        } else {
            this.setState({errorMessage: 'Invalid Login Credentials'})
        }
    }

    inputEntered(value, id){
        let newState = {};
        newState[id] = value;
        this.setState(newState); 
    }

    render() {
        return (
            <Card header="Craving Beer?" fields={[{value: 'Email Address', password: false, id: "EmailAddress"}, {value: 'Password', password: true, id:"Password"}]} 
                actionButtonValue="Login" actionButtonHandler={this.login} handleKeyPress={this.inputEntered} errorMessage={this.state.errorMessage}>
                <JoinNow/>
            </Card>
        );
    }
}

export default HomeContainer;