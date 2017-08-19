import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Card from '../../Components/Card'
import axios from 'axios'
import config from '../../config.js'
import Background from '../../Assets/Images/bg.jpg';


class Home extends Component {

    constructor(props) {
        super(props);
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
            this.props.history.push('/dashboard');
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
                actionButtonValue="Login" actionButtonHandler={this.login.bind(this)} handleKeyPress={this.inputEntered.bind(this)} errorMessage={this.state.errorMessage}>
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