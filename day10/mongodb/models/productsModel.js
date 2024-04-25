const mongoose=require("mongoose");

const productschema=mongoose.Schema({
  title:{
    type:String,
    unique:true,
    required:true,
  },
 price:{
  type:Number,
  required:true,
 },
 description:String,
 image:[String],
 createdAt:{
  type:Date,
  default:new Date()

 },

 
})

const productModel = mongoose.model('products',productschema);


// const testProduct = new productModel({
//   title:'titan watch',
//   price: 1000,
// })

// testProduct.save().then((res)=>console.log(res))

module.exports=productModel;
