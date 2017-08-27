const redis = require('redis');

class RedisClient {

	constructor(config) {
		this.client = redis.createClient(config.redisPort, config.redisEndpoint, {no_ready_check: true});
		this.client.auth(config.redisPassword);
		this.client.select(config.redisDatabaseIndex);
    }
		
	storeHashSetField(key, field, value) {
		this.client.hmset(key, field, value);
	}
	
	getHashSetField(key, field) {
		return new Promise((resolve, reject) => this.client.hget(key, field, (err, obj) => resolve(obj)));
	}

	addToSet(key, field) {
		this.client.sadd(key, [field]);
	}

	fieldExistsInSet(key, field) {
		return new Promise((resolve, reject) => this.client.sismember(key, field, (err, obj) => resolve(obj)));
	}
}

module.exports = RedisClient;