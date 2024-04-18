const express =require('express');
const productController= require('../controllers/productsController');

const productRouter=express.Router();
productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addproduct)
productRouter.route('/:id')
.put(productController.putProduct)
.delete(productController.deleteProduct) 

module.exports=productRouter;