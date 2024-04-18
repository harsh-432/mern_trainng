const mongoose=require("mongoose");

const productschema=mongoose.Schema({
  title:String,
 price:Number,  
})

const productModel = mongoose.model('products',productschema);
const testProduct = new productModel({
  title:'titan watch',
  price: 1000,
})

testProduct.save().then((res)=>console.log(res))