const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const personSchema = new Schema ({
  name:{
    type: String,
    require: true,
  },  
  age: Number,
  favoriteFoods:[String],
});
module.exports = Person = mongoose.model("persons", personSchema)