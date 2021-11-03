const mongoose = require('mongoose');


const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
  console.log("mongo connection open");
})
.catch(err=>{
  console.log("OH NO mongo connection ERROR")
  console.log(err);
}) //returns error if it does not connect


// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 9.99,
//   category: 'fruit'
// })

// p.save()
//   .then(p => {
//     console.log(p)
//   })
//   .catch(e =>{
//     console.log(e);
//   })


const seedProducts = [
  {
    name: 'seminte de dovleac',
    price: 2.22,
    category: 'fruit'
  },
  {
    name: 'seminte de roșii',
    price: 1.99,
    category: 'vegetable'
  },
  {
    name: 'seminte de cireș',
    price: 12,
    category: 'fruit'
  },
  {
    name: 'puiet alune de pădure',
    price: 42.49,
    category: 'fruit'
  },
  {
    name: 'lapte de vacă',
    price: 4.25,
    category: 'dairy'
  },
  {
    name: 'seminte de floarea soarelui',
    price: 0.21,
    category: 'vegetable'
  },
]

Product.insertMany(seedProducts) //to be noted here that if one of those from above does not get inserted, none of them get because the operation gets cancelled
  .then(res => {
    console.log(res)
  })
  .catch(err=> {
    console.log(err);
  })