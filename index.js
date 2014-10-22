'use-strict';

var Mongoose = require('mongoose');
var Customer = require('/lib/models/customer')

mongoUri = 'mongodb://localhost:27017/ecom ';
Mongoose.connect(mongoUri);

var connection = Mongoose.connection;
connection.once('open', function () {
  console.log('Successfully connected to: ' + mongoUri)
});

var connection = global.mongooseConnection;

var Jason = new Customer({
  name: {
    first: 'Jason',
    middle: '',
    last: 'Towner'
  },
  email: 'jsntowner@gmail.com'
});

jason.save(function (err) {
  if (err) {
    console.log(err);
  }else {
    console.log('jason was saved.')
  }
});




