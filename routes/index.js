var User = require('../models').User;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.send( {"status": "success"} );
};

exports.frame = function(req, res){

};

exports.store = function(req, res){
  var data = req.body;
  var userid = data.userid;
  
  console.log( userid );
  
  res.send( "word" );
  
};