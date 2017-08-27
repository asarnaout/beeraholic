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

    async signUp(user) {
        user.createdOn = new Date();

        if(!this.isProvided(user.emailAddress) || !this.isProvided(user.password) || !this.isProvided(user.firstName) || !this.isProvided(user.lastName)) {
            return {message: "Please Enter all the Required Fields"};
        }

        if(user.password.length < 6) {
            return {message: "Password should contain at least 6 characters"};
        }

        user.password = helpers.hashData(user.password);           

        if(!emailRegex.test(user.emailAddress)) {
            return {message: "Please Enter a Valid Email Address"};
        }

        let dbUser = await this.redisClient.getHashSetField(usersHashtableName, user.emailAddress);

        if(dbUser != null) {
            return {message: "Email Address Already Exists"};
        }

        user.userKey = helpers.generateGuid();
        
        this.redisClient.storeHashSetField(usersHashtableName, user.emailAddress, JSON.stringify(user));
        this.redisClient.addToSet(userKeysSetName, user.userKey);
        
        return {success: true, userKey: user.userKey};
    }

    async signIn(credentials) {
        const hashedPassword = helpers.hashData(credentials.password)
        let user = await this.redisClient.getHashSetField(usersHashtableName, credentials.emailAddress);

        if(user === null) {
            return {success:false};
        }

        let jsonUser = JSON.parse(user);
        
        if(jsonUser.password != hashedPassword){
            return {success:false};
        }
        return {success: true, userKey: jsonUser.userKey};
    }

    async authenticateUser(key) {
        let result = await this.redisClient.fieldExistsInSet(userKeysSetName, key)
        return {success: result};
    }
}

module.exports = AccountService;