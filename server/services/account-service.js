const usersHashtableName = "usr";
const helpers = require('./helpers');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class AccountService{

    constructor(redisClient){
        this.redisClient = redisClient;
    }

    signUp(user) {
        user.createdOn = new Date();
        return new Promise((resolve, reject) => {

            if(user.emailAddress === '' || user.password === '' || user.firstName === '' || user.lastName === '') {
                return resolve("Please Enter all the Required Fields");
            }

            if(user.password.length < 6) {
                return resolve("Password should contain at least 6 characters");
            }

            user.password = helpers.hashData(user.password);           

            if(!emailRegex.test(user.emailAddress)) {
                return resolve("Please Enter a Valid Email Address");
            }

            this.redisClient.getHashSetField(usersHashtableName, user.emailAddress, (err, obj) => {
                if(obj != null) {
                    return resolve("Email Address Already Exists");
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
                    if(obj === null) {
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