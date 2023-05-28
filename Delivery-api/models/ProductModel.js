const mongoose = require("mongoose");
const schemaProduct = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
  });

  const ProductDBModel = mongoose.model("products",schemaProduct)
  

module.exports = ProductDBModel;