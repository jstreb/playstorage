var mongoose = require( 'mongoose' );

var connect = function( config, callback ) {
  var uri = 'mongodb://';
  if (config.username && config.password) {
    uri += config.username + ':' + config.password + '@';
  }
  uri += config.host;
  if (config.port) {
    uri += ':' + config.port;
  }
  uri += '/' + config.database;
  console.log('Connecting to Mongo', {
    host : config.host,
    port : config.port,
    database : config.database
  });
  mongoose.connect(uri, callback);
};

module.exports.connect = connect;