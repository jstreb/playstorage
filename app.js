
/**
 * Module dependencies.
 */

var express = require('express')
  , config = require("./config")[env]
  , routes = require('./routes')
  , mongo = require('./lib/mongo');
  
mongo.connect(config.mongodb, function(err) {
  if (err) {
    throw err;
  }
  console.info('Connected to Mongo');
});

var app = module.exports = express.createServer(
    express.cookieParser()
  , express.session({ secret: 'keyboard cat', cookie: { maxAge: 600000, httpOnly: false } })
);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.post('/store', routes.store );

app.listen(env.PORT || config.port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
