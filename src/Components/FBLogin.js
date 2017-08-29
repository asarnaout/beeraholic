import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';


class FBLogin extends Component{
    render(){
       return(
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <FacebookLogin
                            appId="1054110908058942"
                            autoLoad={true}
                            fields="first_name,last_name,email"
                            icon="fa-facebook"
                            cssClass="fb-login"
                            textButton="Continue With Facebook"
                            onClick={this.props.fbLoginClicked}
                            callback={this.props.loginWithFaceBook} /> 
                    </div>
                </div>
                <div className="h10"/>
            </div>);
    }
}

export default FBLogin;


 
                