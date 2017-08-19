import React, { Component } from 'react';
import Card from '../../Components/Card'
import axios from 'axios'
import config from '../../config.js'
import './SignUp.css'

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            EmailAddress: '',
            Password: '',
            errorMessage: ''
        };
    }

    async signUp(){
        var data = {
            emailAddress: this.state.EmailAddress,
            password: this.state.Password,
            firstName: this.state.FirstName,
            lastName: this.state.LastName
        };

        var result = await axios({
            method: 'post',
            url: config.apiEndpoint + 'account/signUp',
            data: data
        });

        if(result.data.success) {
            this.props.history.push('/dashboard')
        } else {
            this.setState({errorMessage: 'Email Already Exists'})
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
                actionButtonValue="Sign Up" actionButtonHandler={this.signUp.bind(this)} handleKeyPress={this.inputEntered.bind(this)} errorMessage={this.state.errorMessage}>
            </Card>
        );
    }
}

export default SignUp;