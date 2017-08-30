import {
    SET_ACCOUNT_MAIL,
    SET_ACCOUNT_PASSWORD,
    SET_ACCOUNT_FIRSTNAME,
    SET_ACCOUNT_LASTNAME,
    SET_ACCOUNT_FACEBOOKID,
    SET_LOGIN_ERROR_MESSAGE,
    SET_SIGNUP_ERROR_MESSAGE
} from './action-types'


export function setAccountMail(mail) {
    return {
        type: SET_ACCOUNT_MAIL,
        mail
    }
}

export function setAccountPassword(password) {
    return {
        type: SET_ACCOUNT_PASSWORD,
        password
    }
}

export function setAccountFirstName(firstName) {
    return {
        type: SET_ACCOUNT_FIRSTNAME,
        firstName
    }
}

export function setAccountLastName(lastName) {
    return {
        type: SET_ACCOUNT_LASTNAME,
        lastName
    }
}

export function setAccountFacebookId(facebookId) {
    return {
        type: SET_ACCOUNT_FACEBOOKID,
        facebookId
    }
}

export function setLoginErrorMessage(message) {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        message
    }
}

export function setSignUpErrorMessage(message) {
    return {
        type: SET_SIGNUP_ERROR_MESSAGE,
        message
    }
}