import axios from 'axios'
import config from '../config.js'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AuthenticationHelpers = {
    authenticateUser: async () => {
        let cookie = AuthenticationHelpers.getAuthenticationCookie();
        if(cookie !== undefined) {
            let authenticated = await (axios({
                method: 'post',
                url: config.apiEndpoint + 'account/auth',
                data: {key: cookie}
            }));
            return authenticated.data.success;
        }
    },

    setAuthenticationCookie: (key) => {
        cookies.set(config.authCookieName, key, { path: '/' });
    },

    getAuthenticationCookie: () => {
        return cookies.get(config.authCookieName);
    }
}

export default AuthenticationHelpers;