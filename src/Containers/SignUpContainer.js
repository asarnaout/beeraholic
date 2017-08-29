import React, { Component } from 'react';
import Card from '../Components/Card'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import { register } from '../Helpers/ApiHelpers'
import queryString from 'query-string';

class SignUpContainer extends Component{

    constructor(props) {
        super(props);
        this.auth();
        this.signUp = this.signUp.bind(this);
        this.inputEntered = this.inputEntered.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
        let qs = queryString.parse(this.props.location.search);
        
        this.state = {
            firstName: this.isProvided(qs.firstName) ? qs.firstName : '',
            lastName: this.isProvided(qs.lastName) ? qs.lastName : '',
            emailAddress: this.isProvided(qs.emailAddress) ? qs.emailAddress : '',
            facebookId: this.isProvided(qs.facebookId)? qs.facebookId : '',
            password: '',
            errorMessage: ''
        };
    }

    isProvided(value) {
        return value !== undefined && value !== null && value !== '' && value !== 'undefined'
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();
        
        if(authenticated) {
            this.props.history.push('/search');
        }
    }

    async signUp() {

        let data = {
            emailAddress: this.state.emailAddress,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            facebookId: this.state.facebookId
        };        

        let result = await register(data);
        
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

    handleBackButton() {
        this.props.history.push('/home');
    }

    render(){
        return (
            <Card header="Join Us" fields={[
                {placeholder: 'First Name', value: this.state.firstName, password: false, id: "firstName"},
                {placeholder: 'Last Name', value: this.state.lastName, password: false, id: "lastName"}, 
                {placeholder: 'Email Address', value: this.state.emailAddress, password: false, id: "emailAddress"}, 
                {placeholder: 'Password', value: this.state.password, password: true, id:"password"}]}
                buttons={[
                    {actionButtonValue:"Sign Up", actionButtonHandler:this.signUp, backgroundClass: "blue-bg"},
                    {actionButtonValue:"Back", actionButtonHandler:this.handleBackButton, backgroundClass: "red-bg"}
                ]} 
                handleKeyPress={this.inputEntered} errorMessage={this.state.errorMessage}>
            </Card>
        );
    }
}

export default SignUpContainer;