const express = require('express');
const config = require('./config.js');
const handleRoutes = require('./routes');
const redisClient = require('./data-clients/redis-client');

handleRoutes(express);