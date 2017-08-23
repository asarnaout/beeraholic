const assert = require('assert');
const helpers = require('../services/helpers');
const config = require('../config');
const axios = require('axios');
const redisClient = new (require('../data-clients/redis-client'))(config);
const accountService = new (require('../services/account-service'))(redisClient);
const beerService = new (require('../services/beer-service'))(config);
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
},
{
  "emailAddress": "testing-mocha@testing.com",
  "password": "123456",
  "firstName": "Mocha",
  "lastName": ""
},
{
  "emailAddress": "testing-mocha@testing.com",
  "password": "123456",
  "firstName": "",
  "lastName": "Test"
},
{
  "emailAddress": "testing-mocha@testing.com",
  "firstName": "Mocha",
  "lastName": "Test",
},
{
  "emailAddress": "",
  "password": "123456",
  "firstName": "Mocha",
  "lastName": "Test"
},
{
  "emailAddress": "testing-mocha@testing.com",
  "password": "1",
  "firstName": "Mocha",
  "lastName": "Test"
},
{
  "emailAddress": "testing",
  "password": "123456",
  "firstName": "Mocha",
  "lastName": "Test"
},
{
  "emailAddress": "testingmochaauth@mocha.com",
  "password": "123456",
  "firstName": "Mocha",
  "lastName": "Test"  
}];


function generateRandomString() {
  let S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4() + S4() + S4()).toString();
}

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
        let randomString = generateRandomString();
        testingUsers[1].emailAddress = randomString + testingUsers[1].emailAddress;
        let result = await accountService.signUp(testingUsers[1]);
        assert.equal(result.success, true);
      });
    });
});

describe('AccountService', function() {
    describe('#signUp()', function() {
      it('should reject the sign up attempt and return false due to providing a duplicate email', async function() {
        let result = await accountService.signUp(testingUsers[0]);
        assert.notEqual(result.success, true);
      });
    });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to not providing the last name', async function() {
      let result = await accountService.signUp(testingUsers[2]);
      assert.notEqual(result.success, true);
    });
  });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to not providing the first name', async function() {
      let result = await accountService.signUp(testingUsers[3]);
      assert.notEqual(result.success, true);
    });
  });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to not providing the password', async function() {
      let result = await accountService.signUp(testingUsers[4]);
      assert.notEqual(result.success, true);
    });
  });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to not providing the email address', async function() {
      let result = await accountService.signUp(testingUsers[5]);
      assert.notEqual(result.success, true);
    });
  });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to providing a short password', async function() {
      let result = await accountService.signUp(testingUsers[6]);
      assert.notEqual(result.success, true);
    });
  });
});


describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to providing an invalid email address', async function() {
      let result = await accountService.signUp(testingUsers[7]);
      assert.notEqual(result.success, true);
    });
  });
});

describe('AccountService', function() {
    describe('#signIn()', function() {
      it('should sign in the user and return true', async function() {
        let result = await accountService.signIn({emailAddress: testingUsers[0].emailAddress, password: testPassword});
        assert.equal(result.success, true);
      });
    });
});

describe('AccountService', function() {
    describe('#signIn()', function() {
      it('should reject the sign in attempt and return false due to providing incorrect credentials', async function() {
        let result = await accountService.signIn({emailAddress: testingUsers[0].emailAddress, password: testPassword + "!"});
        assert.equal(result.success, false);
      });
    });
});

describe('AccountService', function() {
  describe('#authenticateUser()', function() {
    it('should not authenticate the user since the provided key is not an authentic key', async function() {
      let result = await accountService.authenticateUser(generateRandomString());
      assert.equal(result.success, false);
    });
  });
});

describe('AccountService', function() {
  describe('#authenticateUser()', function() {
    it('should authenticate the user', async function() {
      let randomString = generateRandomString();
      testingUsers[8].emailAddress = randomString + testingUsers[8].emailAddress;
      let signUpResult = await accountService.signUp(testingUsers[8]);
      let authenticationResult = await accountService.authenticateUser(signUpResult.userKey);
      assert.equal(authenticationResult.success, true);
    });
  });
});

describe('BrewryWebService', function() {
    describe('#queryBeers()', function() {
      it('should return one or more items', async function() {
        this.timeout(5000);
        let result = await beerService.getAllBeers("http://localhost?p=1&name=&ibu=&abv=&year=&order=");
        assert(result.data.length > 1, true);
      });
    });
});


describe('BrewryWebService', function() {
    describe('#queryBeers()', function() {
      it('should return the item after requesting it from the webservice', async function() {
        this.timeout(1000);
        let result = await beerService.getBeer("http://localhost?id=" + testingBeerId);
        assert(result.data.id, testingBeerId);
      });
    });
});