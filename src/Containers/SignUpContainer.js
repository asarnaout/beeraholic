import { connect } from 'react-redux'
import { register } from '../Helpers/ApiHelpers'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import SignUp from '../Components/SignUp'
import { setAccountFirstName, setAccountLastName, setAccountMail, setAccountPassword, setAccountFacebookId, setSignUpErrorMessage } from '../Actions/account-actions'

const signUpUser = async (history, dispatch, firstName, lastName, emailAddress, password, facebookId) => {
    let result = await register({
        firstName,
        lastName,
        emailAddress,
        password,
        facebookId
    });
        
    if(result.data.success === true) {
        AuthenticationHelpers.setAuthenticationCookie(result.data.userKey);
        history.push('/search');
    } else {
        dispatch(setSignUpErrorMessage(result.data.message))
    }
}

const mapStateToProps = state => {    
    return {
        firstName: state.account.firstName,
        lastName: state.account.lastName,
        emailAddress: state.account.emailAddress,
        password: state.account.password,
        facebookId: state.account.facebookId,
        errorMessage: state.signUpErrorMessage.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFirstNameChange: value => dispatch(setAccountFirstName(value)),
        onLastNameChange: value => dispatch(setAccountLastName(value)),
        onEmailChange: value => dispatch(setAccountMail(value)),
        onPasswordChange: value => dispatch(setAccountPassword(value)),
        onFacebookIdChange: value => dispatch(setAccountFacebookId(value)),
        onBackButtonClick: history => history.push('/home'),
        onSignUp: (history, firstName, lastName, emailAddress, password, facebookId) =>  signUpUser(history, dispatch, firstName, lastName, emailAddress, password, facebookId)
    }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer