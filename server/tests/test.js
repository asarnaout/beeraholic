const assert = require('assert');
const helpers = require('../services/helpers');
const config = require('../config');
const axios = require('axios');
const redisClient = new (require('../data-clients/redis-client'))(config);
const accountService = new (require('../services/account-service'))(redisClient);
const testingBeerId = "ZsQEJt";
const usersHashtableName = "usr";
const testPassword = "testhash";
const testingUsers = [
{
    "emailAddress": "testing-mocha@testing.com",
    "password": "4bc75035d73f6083683e040fc31f28e0ec6d1cbce5cb0a5e2611eb89bceb6c16",
    "firstName": "Mocha",
    "lastName": "Test"
},
{
    "emailAddress": "testing-mocha-second@testing.com",
    "password": "4bc75035d73f6083683e040fc31f28e0ec6d1cbce5cb0a5e2611eb89bceb6c16",
    "firstName": "Mocha Two",
    "lastName": "Test Two"
}];


describe('Helpers', function() {
    describe('#hashValue()', function() {
      it('should return the correct sha256 hash', function() {		
          assert.equal('4bc75035d73f6083683e040fc31f28e0ec6d1cbce5cb0a5e2611eb89bceb6c16', helpers.hashData(testPassword));
      });
    });
});

describe('RedisClient', function() {
    describe('#getHashSetField()', function() {
      it('should perform the read and write operations to redis successfully', async function() {	
          redisClient.storeHashSetField(usersHashtableName, testingUsers[0].emailAddress, JSON.stringify(testingUsers[0]));
          let result = await (new Promise((resolve, reject) => {
              redisClient.getHashSetField(usersHashtableName, testingUsers[0].emailAddress, (err, result) => {
              resolve(JSON.parse(result));
            })
          }));
          assert.equal(testingUsers[0].firstName, result.firstName);
      });
    });
});

describe('AccountService', function() {
    describe('#signUp()', function() {
      it('should sign up the user and return true', async function() {
        let S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        let randomString = (S4()+S4() + S4() + S4()).toString();
        testingUsers[1].emailAddress = randomString + testingUsers[1].emailAddress;
        let result = await accountService.signUp(testingUsers[1]);
        assert.equal(result, true);
      });
    });
});

describe('AccountService', function() {
    describe('#signUp()', function() {
      it('should reject the sign up attempt and return false due to providing a duplicate email', async function() {
        let result = await accountService.signUp(testingUsers[0]);
        assert.equal(result, false);
      });
    });
});

describe('AccountService', function() {
    describe('#signIn()', function() {
      it('should sign in the user and return true', async function() {
        let result = await accountService.signIn({emailAddress: testingUsers[0].emailAddress, password: testPassword});
        assert.equal(result, true);
      });
    });
});

describe('AccountService', function() {
    describe('#signIn()', function() {
      it('should reject the sign in attempt and return false due to providing incorrect credentials', async function() {
        let result = await accountService.signIn({emailAddress: testingUsers[0].emailAddress, password: testPassword + "!"});
        assert.equal(result, false);
      });
    });
});

describe('BrewryWebService', function() {
    describe('#queryBeers()', function() {
      it('should return one or more items', async function() {
        let result = await (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beers' + "?key=" + config.breweryApiKey,
          }));
          assert(result.data.data.length > 0, true);
      });
    });
});


describe('BrewryWebService', function() {
    describe('#queryBeers()', function() {
      it('should return the item after requesting it from the webservice', async function() {
        let result = await (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beer/' + testingBeerId + "?key=" + config.breweryApiKey,
          }));
          assert(result.data.data.id, testingBeerId);
      });
    });
});