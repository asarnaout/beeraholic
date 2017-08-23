const usersHashtableName = "usr";
const userKeysSetName = "usr_keys_set";
const helpers = require('./helpers');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class AccountService{

    constructor(redisClient){
        this.redisClient = redisClient;
    }

    isProvided(field) {
        return field != '' && field != undefined && field != null;
    }

    signUp(user) {
        user.createdOn = new Date();
        return new Promise((resolve, reject) => {

            if(!this.isProvided(user.emailAddress) || !this.isProvided(user.password) || !this.isProvided(user.firstName) || !this.isProvided(user.lastName)) {
                return resolve({message: "Please Enter all the Required Fields"});
            }

            if(user.password.length < 6) {
                return resolve({message: "Password should contain at least 6 characters"});
            }

            user.password = helpers.hashData(user.password);           

            if(!emailRegex.test(user.emailAddress)) {
                return resolve({message: "Please Enter a Valid Email Address"});
            }

            this.redisClient.getHashSetField(usersHashtableName, user.emailAddress, (err, obj) => {
                if(obj != null) {
                    return resolve({message: "Email Address Already Exists"});
                }
                user.userKey = helpers.generateGuid();
                this.redisClient.storeHashSetField(usersHashtableName, user.emailAddress, JSON.stringify(user));
                this.redisClient.addToSet(userKeysSetName, user.userKey);
                return resolve({success: true, userKey: user.userKey});
            });

        });
    }

    signIn(credentials) {
        const hashedPassword = helpers.hashData(credentials.password)
        return new Promise((resolve, reject) => {
            this.redisClient.getHashSetField(usersHashtableName, credentials.emailAddress, (err, obj) => {
                if(obj === null) {
                    return resolve({success:false});
                }
                let jsonObj = JSON.parse(obj);
                if(jsonObj.password != hashedPassword){
                    return resolve({success:false});
                }
                return resolve({success: true, userKey: jsonObj.userKey});
            });
        });
    }

    authenticateUser(key) {
        return new Promise((resolve, reject) => {
            this.redisClient.fieldExistsInSet(userKeysSetName, key, (err, obj) => {
                return resolve({success: obj});
            });
        });
    }
}

module.exports = AccountService;