import React, { Component } from 'react';
import './Home.css';
import '../../Assets/css/common.css';
import InputText from '../../Components/InputText'
import Button from '../../Components/Button'


class HomeComponent extends Component {

    render() {
        return (
        <div id="HomeContainer" className="col-xs-offset-4 col-xs-4">
            <h1 className="black-text center-text no-margin">Craving for Beer?</h1>
          
            <div className="h10"/>
            <div className="h10"/>

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <InputText placeholder="Email Address" />
                </div>
            </div>

            <div className="h10"/>

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <InputText placeholder="Password" password={true} />
                </div>
            </div>

            <div className="h10"/>

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Button placeholder="Login" />
                </div>
            </div>

            <div className="h10"/>

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <span className="fs-18">Not a member? Join Now</span>
                </div>
            </div>

        </div>
        );
    }
}

export default HomeComponent;