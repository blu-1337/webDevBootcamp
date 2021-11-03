const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
app.use(methodOverride('_method'))


const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log("mongo connection open");
  })
  .catch(err => {
    console.log("OH NO mongo connection ERROR")
    console.log(err);
  }) //returns error if it does not connect


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))


const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];

app.get('/products', async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category })
    res.render('products/index', { products , category})

  } else {
    const products = await Product.find({});
    res.render('products/index', {products, category: 'All'})

  }

});

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories })
})

app.post('/products', async (req, res) => { //it takes time so we use async
  const newProduct = new Product(req.body)
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  console.log(product)
  res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  // console.log('my id is: GGGGGGGG', product._id);
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: false, new: true })
  res.redirect(`/products/${product._id}`);

})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id) //in case we need the deleted product, otherwise this is not important
  res.redirect('/products');

})

app.listen(3000, () => {
  console.log('app is listening on port 3000!')
})