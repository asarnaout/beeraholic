const express = require('express');
const config = require('./config.js');
const handleRoutes = require('./routes');

handleRoutes(express);