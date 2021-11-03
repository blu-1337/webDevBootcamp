const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
  console.log("Connection open");
})
.catch(err=>{
  console.log("OH NO ERROR")
  console.log(err);
}) 

const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

personSchema.virtual('fullName').get(function(){
  return `${this.first} ${this.last}`
})


personSchema.pre('save', async function () { //this executes before running the .save() command
  this.first = 'YO';
  this.last = 'MAMMA';
  console.log('about to save!');
})
personSchema.post('save', async function () { //this gets logged after the .save() was run
  console.log('just saved!');
})

const Person = mongoose.model('Person', personSchema);


