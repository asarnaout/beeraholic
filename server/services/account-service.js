const usersHashtableName = "usr";
const userEmailKeyMappingHashtableName = "usr_mail_key";
const userFacebookIdKeyMappingHashtableName = "usr_fbid_key";
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

        let existingEmail = await this.redisClient.getHashSetField(userEmailKeyMappingHashtableName, user.emailAddress);

        if(existingEmail != null) {
            return {message: "Email Address Already Exists"};
        }

        user.userKey = helpers.generateGuid();
        
        this.redisClient.storeHashSetField(usersHashtableName, user.userKey, JSON.stringify(user));
        this.redisClient.storeHashSetField(userEmailKeyMappingHashtableName, user.emailAddress, user.userKey);
        
        if(this.isProvided(user.facebookId)) {
            this.redisClient.storeHashSetField(userFacebookIdKeyMappingHashtableName, user.facebookId, user.userKey);
        }

        return {success: true, userKey: user.userKey};
    }

    async signIn(credentials) {        
        if(!this.isProvided(credentials.password) || !this.isProvided(credentials.emailAddress)) {
            return {success: false};
        }

        const hashedPassword = helpers.hashData(credentials.password);
        
        let key = await this.redisClient.getHashSetField(userEmailKeyMappingHashtableName, credentials.emailAddress);
        
        if(key === null) {
            return {success:false};
        }

        let user = JSON.parse(await this.redisClient.getHashSetField(usersHashtableName, key));

        
        if(user.password != hashedPassword){
            return {success:false};
        }

        return {success: true, userKey: user.userKey};
    }

    async facebookSignIn(credentials) {        
        if(!this.isProvided(credentials.facebookId)) {
            return {success: false};
        }
        
        let key = await this.redisClient.getHashSetField(userFacebookIdKeyMappingHashtableName, credentials.facebookId);

        if(key === null) {
            return {success:false};
        }

        return {success: true, userKey: key};
    }

    async authenticateUser(key) {
        if(!this.isProvided(key)) {
            return {success: false};
        }
        
        let result = await this.redisClient.getHashSetField(usersHashtableName, key);
        return {success: result !== null};
    }
}

module.exports = AccountService;