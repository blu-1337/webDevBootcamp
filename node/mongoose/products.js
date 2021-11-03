const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
  console.log("Connection open");
})
.catch(err=>{
  console.log("OH NO ERROR")
  console.log(err);
}) //returns error if it does not connect


const productSchema = new mongoose.Schema({
  // name: String, //cum am făcut înainte
  name: {
    type: String,
    required: true, //este necesar să fie name în productSchema
    maxlength: 100 //astea toate sunt din mongoose documentation vezi pe net

  },
  price: {
    type: Number,
    required: true,
    min: [0, 'price must be positive brosefino'] //minimum price value 0
  },
  onSale: {
    type: Boolean,
    default: false //o declară direct pe fals la type
  },
  categories: [String], //this is the shorthand version cum am făcut la început
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  }
});


productSchema.methods.greet = function(){
  console.log(`Hello, I am ${this.name}!`); //prints the name of the product
}

productSchema.methods.toggleOnSale = function(){
  this.onSale = !this.onSale; //dacă e false o face true și vice versa
  return this.save();
}

productSchema.methods.addCategory = function (newCat) {
  this.categorie.push(newCat)
  return this.save();
}

productSchema.statics.fireSale = function () {
  return this.updateMany({}, {onSale: true, price: 0})
}


const Product = mongoose.model('Product', productSchema);

const findProduct = async() =>{
  const foundProduct = await Product.findOne({name: 'Bike Helmet'});
  foundProduct.greet();
  await foundProduct.toggleOnSale()
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));  //price gets set to 0 and onSale to true

// findProduct();