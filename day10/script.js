const express = require("express");
//const fs=require('fs');
const fspromise = require("fs/promises");
const app = express();
app.use(express.json());

//const productController= require('./controllers/productsController.js');
//const userController= require('./controllers/userController.js');
const productRouter=require('./routes/productRoute.js');
const userRouter=require('./routes/userRoute.js');

// app.use((req,res,next)=>{
//   // console.log("request recived");
//   // next();
//   const time =new Date().toLocaleString();
//   fspromise.appendFile('./log.txt',req.url+'\t'+time+'\n');
//   next();
// })

// const productRouter= express.Router();
// const userRouter=express.Router();

app.use('/api/products',productRouter);

app.use('/api/user',userRouter);



// productRouter.route('/')
// .get(productController.getAllProducts)
// .post(productController.addproduct)
// productRouter.route('/:id')
// .put(productController.putProduct)
// .delete(productController.deleteProduct) 




// app.route('/api/products')
//  .get(productController.getAllProducts)
//  .post(productController.addproduct)

// app.route('/api/products')
// .put(productController.putProduct)
// .delete(productController.deleteProduct) 

// app.route("/api/user")
// .get(userController.getUser)
// .post(userController.postUser)
// .put(userController.putUser)
// .delete(userController.deleteUser)


// app.get("/api/products", productController.getAllProducts);
// app.post("/api/products", productController.addproduct);

// app.put('/api/products/:id',productController.putProduct);
// app.delete('/api/products/:id',productController.deleteProduct);

// // app.patch('/api/product/:id' ,async(req,res)=>{
// //   const reqid=parseInt(req.params.id);
// //   const arr=JSON.parse(await fspromise.readFile("./data.json","utf-8"));
// //   res.send("work in progres");
// // });

// app.get('/api/user',userController.getUser);

// app.post('/api/user',userController.postUser);
// app.put('/api/user',userController.putUser);
// app.delete('/api/user',userController.deleteUser);
app.listen(1300);
