import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import Card from '../../Components/Card'
import axios from 'axios'

class HomeComponent extends Component {

    async login() {
        var response = await axios.post('/account/login', {
            Email: email,
            Password: password
          });
        console.log(response);
    }

    render() {
        return (
            <Card header="Craving Beer?" fields={[{value: 'Email Address', password: false}, {value: 'Password', password: true}]} 
                actionButtonValue="Login" actionButtonHandler={this.login}>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 center-text">
                        <span className="fs-18">Not a member? <Link to={'/signup'}>Join Now - It's Free</Link></span>
                    </div>
                </div>
            </Card>
        );
    }
}

export default HomeComponent;