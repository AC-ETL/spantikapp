const config = require('../config/config');
// Requiring firebase (as our db)
const firebase = require('firebase');

// Creates and initializes a Firebase app instance. Pass options as param
const ddb = firebase.initializeApp(config.firebaseConfig);

module.exports= ddb;