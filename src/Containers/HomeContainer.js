import React, { Component } from 'react';
import Card from '../Components/Card'
import axios from 'axios'
import config from '../config.js'
import Background from '../Assets/Images/bg.jpg'
import JoinNow from '../Components/JoinNow'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.inputEntered = this.inputEntered.bind(this);
        this.state = {
            EmailAddress: '',
            Password: '',
            errorMessage : ''
        };
    }

    componentWillMount(){
        document.body.style.backgroundImage = `url(${Background})`;
        document.body.style.backgroundSize = `cover`;
    }

    async login() {
        var data = {
            emailAddress: this.state.EmailAddress,
            password: this.state.Password
        };

        var result = await axios({
            method: 'post',
            url: config.apiEndpoint + 'account/signin',
            data: data
        });

        if(result.data.success) {
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