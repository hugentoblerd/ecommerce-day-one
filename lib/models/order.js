'use-strict';

var Mongoose = require('mongoose'),
      Moment = require('moment');

var address = require('./shared/address'),
      phone = require('./shared/phone'),
      product = require('./shared/product');

var schema = Mongoose.Schema({

  customer: { type: Mongoose.Schema.Types.ObjectId, ref: 'Customer' },

  billing: address,
  shipping: address,

  billingPhone: phone,
  shippingPhone: phone,

  items: [
    {
      quantity: { type: Number, min: 1, default: 1 },
      product: product
    }
  ],

  status: { type: String, enum: ['pending', 'shipped', 'billed', 'completed'], default: 'pending' },

  createdAt: { type: Date, required: true, default: Moment().utc.toDate() },
  updatedAt: { type: Date }

});

module.exports = Mongoose.model('Order', schema);




