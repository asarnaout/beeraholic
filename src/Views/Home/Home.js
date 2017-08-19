import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Card from '../../Components/Card'
import axios from 'axios'
import config from '../../config.js'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            EmailAddress: '',
            Password: ''
        };
    }

    async login() {
          axios({
            method: 'post',
            url: config.apiEndpoint + 'account/signup',
            data: {
                Email: this.state.EmailAddress,
                Password: this.state.Password
            }
          });         
    }

    inputEntered(key, id){
        let newState = {};
        newState[id] = this.state[id] + key;
        this.setState(newState); 
    }

    render() {
        return (
            <Card header="Craving Beer?" fields={[{value: 'Email Address', password: false, id: "EmailAddress"}, {value: 'Password', password: true, id:"Password"}]} 
                actionButtonValue="Login" actionButtonHandler={this.login.bind(this)} handleKeyPress={this.inputEntered.bind(this)}>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 center-text">
                        <span className="fs-18">Not a member? <Link to={'/signup'}>Join Now - It's Free</Link></span>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Home;