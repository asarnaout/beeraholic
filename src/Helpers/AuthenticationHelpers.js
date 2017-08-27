import config from '../config.js'
import Cookies from 'universal-cookie';
import { authenticate } from './ApiHelpers'

const cookies = new Cookies();

const getCookieExpiryDate = () =>{
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
}

const AuthenticationHelpers = {
    authenticateUser: async () => {
        let cookie = AuthenticationHelpers.getAuthenticationCookie();
        if(cookie !== undefined) {
            let authenticated = await authenticate(cookie);
            return authenticated.data.success;
        }
    },

    setAuthenticationCookie: (key) => {
        cookies.set(config.authCookieName, key, { path: '/', expires: getCookieExpiryDate() });
    },

    getAuthenticationCookie: () => {
        return cookies.get(config.authCookieName);
    }
}

export default AuthenticationHelpers;