const express=require('express');
const userController=require('../controllers/userController');


const userRouter=express.Router();
userRouter.route('/')
.get(userController.getUser)
.post(userController.postUser)
userRouter.route('/:id')
.put(userController.putUser)
.delete(userController.deleteUser)

module.exports=userRouter;