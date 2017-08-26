const axios = require('axios');
const url = require('url');
const userFavoritesHashtableName = "usr_favorites"

class BeerService {

    constructor(config, redisClient) {
        this.config = config;
        this.redisClient = redisClient;
    }
    
    async getAllBeers(raw_url, body){
        let url_parts = url.parse(raw_url, true);
        let query = url_parts.query;
        let sort = query.order !== undefined && query.order !== null && query.order !== "name" && query.order !== "createDate" && query.order !== "isOrganic" && query.order !== ''? "DESC":"ASC";     
        let queryString = "?key=" + this.config.breweryApiKey + "&p=" + query.p + "&name=" + query.name + "&ibu=" + query.ibu + "&abv=" + query.abv + "&year=" + query.year + "&order=" + query.order + "&sort=" + sort;
        let result = await (axios({
            method: 'get',
            url: this.config.breweryApiEndpoint + 'beers' + queryString,
        }));

        return new Promise((resolve, reject) => {
            this.redisClient.getHashSetField(userFavoritesHashtableName, body.key, (err, obj) => {
                if(obj === null) {
                    resolve(result.data);
                } else {
                    let favs = obj.split(',');
                    for(let i = 0; i < result.data.data.length; i++) {
                        let beer = result.data.data[i];
                        if(favs.includes(beer.id)){
                            beer.isFav = "true";
                        }
                    }
                    resolve(result.data);
                }
            })
        });
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

    async toggleFavorites(details) {
        let key = details.key;
        return new Promise((resolve, reject) => {
            this.redisClient.getHashSetField(userFavoritesHashtableName, key, (err, obj) => {
                let result = '';
                if(obj === null) {
                    result = details.beerId;
                } else {
                    let unfav = false;
                    result = obj.split(',').map((fav) => {
                        if(fav !== details.beerId) return fav; 
                        else unfav = true;
                    }).join();
                    if(!unfav) result += `,${details.beerId}`;
                }
                this.redisClient.storeHashSetField(userFavoritesHashtableName, key, result);
                resolve();
            });
        });
    }
}

module.exports = BeerService;