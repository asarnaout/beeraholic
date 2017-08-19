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
            Password: ''
        };
    }

    signUp(){

    }

    inputEntered(key, id){
        let newState = {};
        newState[id] = this.state[id] + key;
        this.setState(newState); 
    }

    render(){
        return (
            <Card header="Join Us" fields={[
                {value: 'First Name', password: false, id: "FirstName"},
                {value: 'Last Name', password: false, id: "LastName"}, 
                {value: 'Email Address', password: false, id: "EmailAddress"}, 
                {value: 'Password', password: true, id:"Password"}]} 
                actionButtonValue="Sign Up" actionButtonHandler={this.signUp.bind(this)} handleKeyPress={this.inputEntered.bind(this)}>
            </Card>
        );
    }
}

export default SignUp;