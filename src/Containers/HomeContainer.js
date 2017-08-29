import React, { Component } from 'react';
import Card from '../Components/Card'
import JoinNow from '../Components/JoinNow'
import FBLogin from '../Components/FBLogin'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import { signIn, register, fbLogin } from '../Helpers/ApiHelpers'

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.auth();
        this.login = this.login.bind(this);
        this.inputEntered = this.inputEntered.bind(this);
        this.loginWithFaceBook = this.loginWithFaceBook.bind(this);
        this.onAuthenticationSuccess = this.onAuthenticationSuccess.bind(this);
        this.fbLoginClicked = this.fbLoginClicked.bind(this);
        this.state = {
            emailAddress: '',
            password: '',
            errorMessage : '',
            fbLoginClicked: false
        };        
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();
        
        if(authenticated) {
            this.props.history.push('/search');
        }
    }

    onAuthenticationSuccess(key){
        AuthenticationHelpers.setAuthenticationCookie(key);
        this.props.history.push('/search');
    }

    async login() {
        let data = {
            emailAddress: this.state.emailAddress,
            password: this.state.password
        };

        let result = (await signIn(data)).data;

        if(result.success) {
            this.onAuthenticationSuccess(result.userKey);
        } else {
            this.setState({errorMessage: 'Invalid Login Credentials'})
        }
    }

    inputEntered(value, id){
        let newState = {};
        newState[id] = value;
        this.setState(newState); 
    }
    
    generateRandomPassword(){
        let S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4() + S4() + S4() + S4()).toString();
    }

    async loginWithFaceBook(response) {       
        if(!this.state.fbLoginClicked) return;
        let fbSignInResult = await fbLogin({facebookId: response.id});
        if(fbSignInResult.data.success) {
            this.onAuthenticationSuccess(fbSignInResult.data.userKey);
        } else {
            let signUpResult = await register({firstName: response.first_name, lastName: response.last_name, emailAddress: response.email, password: this.generateRandomPassword(), facebookId: response.id});        
            if(signUpResult.data.success) {
                this.onAuthenticationSuccess(signUpResult.data.userKey);
            } else {
                this.props.history.push(`/signup?firstName=${response.first_name}&lastName=${response.last_name}&emailAddress=${response.email}&facebookId=${response.id}`);
            }
        }
    }

    fbLoginClicked(){
        this.setState({fbLoginClicked: true});
    }

    render() {
        return (
            <Card header="Craving Beer?" fields={[
                {value: this.state.emailAddress, placeholder:'Email Address', password: false, id: "emailAddress"}, 
                {value: this.state.password, placeholder:"Password", password: true, id:"password"}]}
                buttons={[{actionButtonValue:"Login", actionButtonHandler:this.login, backgroundClass: "blue-bg"}]} 
                handleKeyPress={this.inputEntered} errorMessage={this.state.errorMessage}>
                <FBLogin loginWithFaceBook={this.loginWithFaceBook} fbLoginClicked={this.fbLoginClicked} />
                <JoinNow/>
            </Card>
        );
    }
}

export default HomeContainer;