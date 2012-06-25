var port = process.env.PORT || 3000;
module.exports = {
  development: {
    port: port,
    mongodb: {
      username: 'jstreb',
      password: 'pickle37!',
      host: 'bernard.mongohq.com',
      port:  10017,
      database: 'app5541893'
    }
  },
  production: {
    port: port,
    mongodb: {
      username: 'jstreb',
      password: 'pickle37!',
      host: 'bernard.mongohq.com',
      port:  10017,
      database: 'app5541893'
    }
  }
};