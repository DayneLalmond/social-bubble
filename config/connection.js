const { connect, connection } = require('mongoose');

//connection will be the url of the server compatible with heroku
connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
