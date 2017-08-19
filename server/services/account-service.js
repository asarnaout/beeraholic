const usersHashtableName = "usr";
const helpers = require('./helpers');

class AccountService{

    constructor(redisClient){
        this.redisClient = redisClient;
    }

    signUp(user) {
        user.password = helpers.hashData(user.password);
        this.redisClient.storeHashSetField(usersHashtableName, user.emailAddress, JSON.stringify(user));
    }
}

module.exports = AccountService;