import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Assets/css/common.css';
import '../Assets/css/Home.css';
import InputText from './InputText'
import Button from './Button'
import FacebookLogin from 'react-facebook-login';

class Home extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.loginWithFaceBook = this.loginWithFaceBook.bind(this);
    }

    loginWithFaceBook(value) {
        this.props.loginWithFaceBook(value, this.props.history);
    }

    login() {
        this.props.onLoginClick(this.props.emailAddress, this.props.password, this.props.history);
    }

    componentWillMount() {
        this.props.auth(this.props.history);
    }

    componentDidMount() {
        document.body.style.height = "100%";
        document.body.parentElement.style.height = "100%"
        document.body.children[1].style.height = "100%"
        document.body.children[1].children[0].style.height = "100%"
    }

    render() {
        return (
            <div className="card col-lg-offset-4 col-lg-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12" id="Card">
                <div>
                    <h1 className="black-text center-text no-margin">Craving Beer?</h1>
                    <div className="h20" />            

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
                                <Button placeholder="Login" clickHandler={this.login} background="blue-bg" />
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>    

                    <div>
                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1">
                                <FacebookLogin
                                    appId="1054110908058942"
                                    fields="first_name,last_name,email"
                                    icon="fa-facebook"
                                    cssClass="fb-login"
                                    textButton="Continue With Facebook"
                                    callback={this.loginWithFaceBook} /> 
                            </div>
                        </div>
                        <div className="h10"/>
                    </div>

                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 center-text">
                            <span className="fs-18">Not a member? <Link to={'/signup'}>Join Now - It's Free</Link></span>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Home;