import axios from 'axios'
import config from '../config.js'

export async function getAllBeers(page, beername, ibu, abv, year, order, cookie) {
    if(cookie === undefined) return {items: [], numberOfPages: 0};
    let queryString = "?p=" + page + "&name=" + beername + "&ibu=" + ibu + "&abv=" + abv + "&year=" + year + "&order=" + order;
    let getBeersRequest = await axios({ method: 'post', url: config.apiEndpoint + 'beers' + queryString, data: {key: cookie} });
    let items = typeof (getBeersRequest.data.data) === 'undefined'? [] : getBeersRequest.data.data;
    let numberOfPages = getBeersRequest.data.numberOfPages;
    return { items, numberOfPages };
}

export async function getBeer(id) {        
    return await (axios({
        method: 'get',
        url: config.apiEndpoint + 'beer?id=' + id,
      }));
}

export async function signIn(data){
    return await axios({
        method: 'post',
        url: config.apiEndpoint + 'account/signin',
        data: data
    });
}

export async function register(data){
    return await axios({
        method: 'post',
        url: config.apiEndpoint + 'account/signUp',
        data: data
    });
}

export async function fbLogin(data){
    return await axios({
        method: 'post',
        url: config.apiEndpoint + 'account/fbsignin',
        data: data
    });
}

export async function authenticate(cookie){
    return await (axios({
        method: 'post',
        url: config.apiEndpoint + 'account/auth',
        data: {key: cookie}
    }));
}

export async function toggleFavoriteBeer(userKey, id){
    return await (axios({
        method: 'post',
        url: config.apiEndpoint + 'beer/togglefav',
        data: {key: userKey, beerId: id}
    }));
}