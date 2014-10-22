'use-strict';

var Mongoose = require('mongoose');

var product = require('./shared/product');

var schema = Mongoose.Schema(product);

module.exports = Mongoose.model('Product', schema);




