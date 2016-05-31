var mongoose = require('mongoose');
var path = require('path');
var dotenv = require('dotenv').config({path: path.join(__dirname, '../../.env')});
var dbURI, dbOptions;

dbURI = 'mongodb://localhost/skynet'

mongoose.connect(dbURI, dbOptions);
var db = mongoose.connection;

/* ===============================================
   DB Event Handlers
    ===============================================
 */

 // logs a connection
 mongoose.connection.on('connected', function() {
   console.log('Mongoose connected to ' + dbURI);
 });
 // logs when disconnected
 mongoose.connection.on('disconnected', function() {
   console.log('Mongoose disconnected');
 });

module.exports = db;
