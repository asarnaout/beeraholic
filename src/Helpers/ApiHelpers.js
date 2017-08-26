import axios from 'axios'
import config from '../config.js'

export async function getAllBeers(page, beername, ibu, abv, year, order) {        
    let queryString = "?p=" + page + "&name=" + beername + "&ibu=" + ibu + "&abv=" + abv + "&year=" + year + "&order=" + order;
    let getBeersRequest = await axios({ method: 'get', url: config.apiEndpoint + 'beers' + queryString });
    let items = typeof (getBeersRequest.data.data) === 'undefined'? [] : getBeersRequest.data.data;
    let numberOfPages = getBeersRequest.data.numberOfPages;
    return { items, numberOfPages };
}