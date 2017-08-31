const express = require('express');
const config = require('./config.js');
const redisClient = new (require('./data-clients/redis-client'))(config);
const accountService = new (require('./services/account-service'))(redisClient);
const beerService = new (require('./services/beer-service'))(config, redisClient);
const handleRoutes = require('./routes');
const mailer = new (require('./services/mailer'))(config);

handleRoutes(express, accountService, beerService, mailer);