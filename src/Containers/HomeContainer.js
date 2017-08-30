import { connect } from 'react-redux'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import { signIn, register, fbLogin } from '../Helpers/ApiHelpers'
import { setAccountMail, setAccountPassword, setLoginErrorMessage } from '../Actions/account-actions'
import Home from '../Components/Home'
import config from '../config'

const auth = async (history) => {
    if(await AuthenticationHelpers.authenticateUser()) {
        history.push('/search');
    }
}

const onAuthenticationSuccess = (key, history) => {
    AuthenticationHelpers.setAuthenticationCookie(key);
    history.push('/search');
}

const login = async(emailAddress, password, history, dispatch) => {
    if(!emailAddress || !password) {
        dispatch(setLoginErrorMessage('Please Enter All Required Fields'));
        return;
    }
    let data = { emailAddress, password };
    let result = (await signIn(data)).data;
    if(result.success) {
        onAuthenticationSuccess(result.userKey, history);
    } else {
        dispatch(setLoginErrorMessage('Invalid Login Credentials'))
    }
}

const generateRandomPassword = () => {
    let S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4() + S4() + S4() + S4()).toString();
}

const loginWithFaceBook = async (response, history) => {
    let fbSignInResult = await fbLogin({facebookId: response.id});
    if(fbSignInResult.data.success) {
        onAuthenticationSuccess(fbSignInResult.data.userKey, history);
    } else {
        let signUpResult = await register({firstName: response.first_name, lastName: response.last_name, emailAddress: response.email, password: generateRandomPassword(), facebookId: response.id});        
        if(signUpResult.data.success) {
            onAuthenticationSuccess(signUpResult.data.userKey, history);
        } else {
            history.push(`/signup?firstName=${response.first_name}&lastName=${response.last_name}&emailAddress=${response.email}&facebookId=${response.id}`);
        }
    }
}

const mapStateToProps = state => {
    return {
        emailAddress: state.account.emailAddress,
        password: state.account.password,
        errorMessage: state.loginErrorMessage.value,
        facebookAppId: config.facebookAppId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (emailAddress, password, history) => login(emailAddress, password, history, dispatch),
        onEmailChange: value => dispatch(setAccountMail(value)),
        onPasswordChange: value => dispatch(setAccountPassword(value)),
        auth: history => auth(history),
        loginWithFaceBook: (value, history) => loginWithFaceBook(value, history)
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer