var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Value = new Schema({
  key: String,
  value: String
});

var UserSchema = module.exports = new Schema({
  userid: String,
  values: [Value]
});

UserSchema.pre( 'save', function( next ) {
  var km;
  if ( this.isNew ) {
    km = new km_client( {key: global.APPLICATION_CONFIG.kissmetrics_key} );
    km.record(this.email, 'Registered', function( err ) {
      if ( err ) {
        console.log( "Unable to record registration event in KM with error: " + err );
      }
    });
  }
  next();
});