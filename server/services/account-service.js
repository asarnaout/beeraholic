const usersHashtableName = "usr";
const helpers = require('./helpers');

class AccountService{

    constructor(redisClient){
        this.redisClient = redisClient;
    }

    signUp(user) {
        user.password = helpers.hashData(user.password);

        return new Promise((resolve, reject) => {
            this.redisClient.getHashSetField(usersHashtableName, user.emailAddress, (err, obj) => {
                if(obj != null) {
                    return resolve(false);
                }
                this.redisClient.storeHashSetField(usersHashtableName, user.emailAddress, JSON.stringify(user));
                return resolve(true);
            });
        });
    }

    signIn(credentials) {
        const hashedPassword = helpers.hashData(credentials.password)
        return new Promise((resolve, reject) => {
                this.redisClient.getHashSetField(usersHashtableName, credentials.emailAddress, (err, obj) => {
                    if(obj == null) {
                        return resolve(false);
                    }
                    let jsonObj = JSON.parse(obj);
                    if(jsonObj.password != hashedPassword){
                        return resolve(false);
                    }
                    return resolve(true);
            });
        });
    }
}

module.exports = AccountService;