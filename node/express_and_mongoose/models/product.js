const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    lowercase: true, //in case you enter Fruit
    enum: ['fruit', 'vegetable', 'diary']
  }
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product;