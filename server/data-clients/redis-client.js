const redis = require('redis');

class RedisClient {
    
	constructor(config) {
		this.client = redis.createClient(config.redisPort, config.redisEndpoint, {no_ready_check: true});
		this.client.auth(config.redisPassword);
	}
		
	storeHashSetField(key, field, value) {
		this.client.hmset(key, field, value);
	}
	
	getHashSetField(key, field, callback) {
		return this.client.hget(key, field, callback);
	}
	
}

module.exports = RedisClient;