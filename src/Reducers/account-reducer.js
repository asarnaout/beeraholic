import {
    SET_ACCOUNT_FIRSTNAME,
    SET_ACCOUNT_LASTNAME,
    SET_ACCOUNT_MAIL,
    SET_ACCOUNT_PASSWORD,
    SET_ACCOUNT_FACEBOOKID,
    SET_LOGIN_ERROR_MESSAGE,
} from '../Actions/action-types'

const INITIAL_LOGIN_ERROR_MESSAGE = { value: '' };
const INITIAL_ACCOUNT_STATE = { emailAddress: '', firstName: '', lastName: '', password: ''};

export function account(state=INITIAL_ACCOUNT_STATE, action) {
    switch(action.type) {
        case SET_ACCOUNT_FIRSTNAME: return Object.assign({}, state, {firstName: action.firstName});
        case SET_ACCOUNT_LASTNAME: return Object.assign({}, state, {lastName: action.lastName});
        case SET_ACCOUNT_MAIL: return Object.assign({}, state, {emailAddress: action.mail});
        case SET_ACCOUNT_PASSWORD: return Object.assign({}, state, {password: action.password});
        case SET_ACCOUNT_FACEBOOKID: return Object.assign({}, state, {password: action.facebookId});
        default: return state;
    }
}

export function loginErrorMessage(state = INITIAL_LOGIN_ERROR_MESSAGE, action) {
    switch(action.type) {
        case SET_LOGIN_ERROR_MESSAGE: return Object.assign({}, state, {value: action.message});
        default: return state;
    }
}