const express = require('express');
const cusController = require('./controllers/customerController');
const route = express.Router();


route.get('/',cusController);

module.exports = route;