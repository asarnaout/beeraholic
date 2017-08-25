const axios = require('axios');
const url = require('url');

class BeerService {

    constructor(config) {
        this.config = config;
    }
    
    async getAllBeers(raw_url){
        let url_parts = url.parse(raw_url, true);
        let query = url_parts.query;
        let sort = query.order !== undefined && query.order !== null && query.order !== "name" && query.order !== "isOrganic" && query.order !== ''? "DESC":"ASC";     
        let queryString = "?key=" + this.config.breweryApiKey + "&p=" + query.p + "&name=" + query.name + "&ibu=" + query.ibu + "&abv=" + query.abv + "&year=" + query.year + "&order=" + query.order + "&sort=" + sort;
        let result = await (axios({
            method: 'get',
            url: this.config.breweryApiEndpoint + 'beers' + queryString,
        }));
        return result.data;
    }

    async getBeer(raw_url){
        let url_parts = url.parse(raw_url, true);
        let query = url_parts.query;
        let beerid = query.id;

        let result = await (axios({
            method: 'get',
            url: this.config.breweryApiEndpoint + 'beer/' + beerid + "?key=" + this.config.breweryApiKey,
        }));

    	return result.data;
    }

}

module.exports = BeerService;