import React, { Component } from 'react';
import InputText from './InputText'
import Button from './Button'
import '../Assets/css/common.css';
import queryString from 'query-string';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.onBackButtonClick = this.onBackButtonClick.bind(this);
        this.signUp = this.signUp.bind(this);
        let qs = queryString.parse(this.props.location.search);
        this.isProvided(qs.firstName) && this.props.onFirstNameChange(qs.firstName);
        this.isProvided(qs.lastName) && this.props.onLastNameChange(qs.lastName);        
        this.isProvided(qs.emailAddress) && this.props.onEmailChange(qs.emailAddress);        
        this.isProvided(qs.facebookId) && this.props.onFacebookIdChange(qs.facebookId);       
    }

    isProvided(value) {
        return value !== undefined && value !== null && value !== '' && value !== 'undefined'
    }

    componentDidMount() {
        document.body.style.height = "100%";
        document.body.parentElement.style.height = "100%"
        document.body.children[1].style.height = "100%"
        document.body.children[1].children[0].style.height = "100%"
    }

    onBackButtonClick() {
        this.props.onBackButtonClick(this.props.history)
    }

    signUp() {
        this.props.onSignUp(this.props.history, this.props.firstName, this.props.lastName, this.props.emailAddress, this.props.password, this.props.facebookId)
    }

    render() {
        return (
            <div className="card col-lg-offset-4 col-lg-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12" id="Card">
                <div>
                    <h1 className="black-text center-text no-margin">Join Us</h1>
                    <div className="h20" />            
                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <InputText placeholder="First Name" value={this.props.firstName} handleKeyPress={this.props.onFirstNameChange} />
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>         
                    
                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <InputText placeholder="Last Name" value={this.props.lastName} handleKeyPress={this.props.onLastNameChange} />
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>      

                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <InputText placeholder="Email Address" value={this.props.emailAddress} handleKeyPress={this.props.onEmailChange} />
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>      

                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <InputText placeholder="Password" value={this.props.password} handleKeyPress={this.props.onPasswordChange} password={true} />
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>      
                    
                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <span className="red-text fs-14" id="ErrorMessage">
                                    {this.props.errorMessage}
                                </span>
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <Button placeholder="Sign Up" clickHandler={this.signUp} background="blue-bg" />
                            </div>
                        </div>                                    
                        <div className="h10"/>
                    </div>  

                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <Button placeholder="Back" clickHandler={this.onBackButtonClick} background="red-bg" />
                            </div>
                        </div>                                    
                        <div className="h10"/>
                    </div>  
                </div>
            </div>);
    }
}

export default SignUp;