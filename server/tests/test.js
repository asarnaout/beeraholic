const assert = require('assert');
const helpers = require('../services/helpers');
const config = require('../config');
const axios = require('axios');
const redisClient = new (require('../data-clients/redis-client'))(config);
const accountService = new (require('../services/account-service'))(redisClient);
const beerService = new (require('../services/beer-service'))(config, redisClient);
const testingBeerId = "ZsQEJt";
const testingHashtableName = "tst";
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
},
{
  "emailAddress": "testingmochafb@mocha.com",
  "password": "123456",
  "firstName": "Mocha",
  "lastName": "Test",
  "facebookId": "testingfbId"
}];


function generateRandomString() {
  let S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4() + S4() + S4() + S4()).toString();
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
          let key = generateRandomString();
          let testingObj = {firstName: generateRandomString()};
          redisClient.storeHashSetField(testingHashtableName, key, JSON.stringify(testingObj));
          let result = await redisClient.getHashSetField(testingHashtableName, key);
          assert.equal(testingObj.firstName, JSON.parse(result).firstName);
      });
    });
});

describe('AccountService', function() {
  describe('#signUp()', function() {
    it('should reject the sign up attempt and return false due to providing a duplicate email', async function() {
      testingUsers[0].password = testPassword;
      let attempt1 = await accountService.signUp(testingUsers[0]);
      let attempt2 = await accountService.signUp(testingUsers[0]);
      assert.notEqual(attempt2.success, true);
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
  describe('#signIn()', function() {
    it('should reject the sign in attempt and return false due to not providing the email address', async function() {
      let result = await accountService.signIn({password: testPassword});
      assert.equal(result.success, false);
    });
  });
});

describe('AccountService', function() {
  describe('#signIn()', function() {
    it('should reject the sign in attempt and return false due to not providing the password', async function() {
      let result = await accountService.signIn({emailAddress: testingUsers[0].emailAddress});
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
    it('should not authenticate the user since the key is not provided', async function() {
      let result = await accountService.authenticateUser();
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

describe('AccountService', function() {
  describe('#facebookSignIn()', function() {
    it('should sign in the user using the facebook id', async function() {
      testingUsers[9].emailAddress = generateRandomString() + testingUsers[9].emailAddress;
      testingUsers[9].facebookId += generateRandomString();
      await accountService.signUp(testingUsers[9]);
      let fbSignInResult = await accountService.facebookSignIn({facebookId: testingUsers[9].facebookId});
      assert.equal(fbSignInResult.success, true);
    });
  });
});

describe('AccountService', function() {
  describe('#facebookSignIn()', function() {
    it('should reject the facebook sign in attempt due to not providing a facebook id', async function() {
      let fbSignInResult = await accountService.facebookSignIn({facebookId: ""});
      assert.equal(fbSignInResult.success, false);
    });
  });
});

describe('AccountService', function() {
  describe('#facebookSignIn()', function() {
    it('should reject the facebook sign in attempt due to providing an invalid facebook id', async function() {
      let fbSignInResult = await accountService.facebookSignIn({facebookId: generateRandomString()});
      assert.equal(fbSignInResult.success, false);
    });
  });
});

describe('BeerService', function() {
    describe('#queryBeers()', function() {
      it('should return one or more items', async function() {
        this.timeout(5000);
        let result = await beerService.getAllBeers("http://localhost?p=1&name=&ibu=&abv=&year=&order=", {key: generateRandomString()});
        assert.equal(result.data.length > 1, true);
      });
    });
});

describe('BeerService', function() {
  describe('#queryBeers()', function() {
    it('should return no items', async function() {
      this.timeout(5000);
      let result = await beerService.getAllBeers("http://localhost?p=1&name=&ibu=&abv=&year=999&order=", {key: generateRandomString()});
      assert.equal(result.data, undefined);
    });
  });
});

describe('BeerService', function() {
    describe('#queryBeers()', function() {
      it('should return the item after requesting it from the webservice', async function() {
        this.timeout(1000);
        let result = await beerService.getBeer("http://localhost?id=" + testingBeerId);
        assert.equal(result.data.id, testingBeerId);
      });
    });
});

describe('BeerService', function() {
  describe('#toggleFavorites()', function() {
    it('should add the beer to the users favorite list', async function() {
      this.timeout(6000);
      let randomUserKey = generateRandomString();
      let preFav = await beerService.getAllBeers("http://localhost?p=1&name=&ibu=&abv=&year=&order=", {key: randomUserKey});
      let beerId = preFav.data[0].id;
      await beerService.toggleFavorites({key: randomUserKey, beerId : beerId});
      let postFav = await beerService.getAllBeers("http://localhost?p=1&name=&ibu=&abv=&year=&order=", {key: randomUserKey});
      assert.equal(postFav.data[0].isFav, true);
    });
  });
});