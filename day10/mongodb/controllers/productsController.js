const productModel = require("../models/productsModel.js");
const productsModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const q=req.query;
  console.log(q);
  //const datadb = await productsModel.find(q);
  const datadb = await productsModel.find();
  console.log(datadb);

  //const obj=JSON.parse(data);
  res.send({
    status: "success",
    data: {
      products:datadb,
    },
  });
};

const addproduct = async (req, res) => {
  try {
    console.log(req.body);
    const data = await productsModel.create(req.body);
    console.log(data);
    res.json({
      status: "success",
      results: 1,
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const putProduct = async (req, res) => {
  
  
};

const  replaceProduct = async(req,res)=>{
  const reqid=req.params.id;
  const data = {...req.body ,reqid};
  const result=await productsModel.findOneAndReplace({_id:reqid},data);
  res.send({
    status: "success",
    result
  })
}

const deleteProduct = async (req, res) => {

  try{
    const reqid = req.params.id;
    await productsModel.findOneAndDelete({_id:reqid});
  
    res.json({
      status:"success",
      message:"successfully deleted"
  
    })
  }
  catch(error){
    console.log(error.message);
  }
  
  
};
module.exports = {
  getAllProducts,
  addproduct,
  putProduct,
  deleteProduct,
  replaceProduct
};
