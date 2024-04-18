const fspromise = require("fs/promises");


const getAllProducts=async (req, res) => {
  //const data = fs.readFileSync('./data.json',"utf8");
  const data = await fspromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(data);

  //const obj=JSON.parse(data);
  res.json({
    status: "success",
    results: arr.length,
    data: {
      products: arr,
    },
  });
  //  res.send("this is home page");
  console.log("server started");
}


const addproduct=async (req, res) => {
  //console.log(req);
  //console.log(Object.keys(req));
  //console.log(req.body);
  // data.id=212;
  // console.log(data);

  const data = req.body;
  if(!data.price || !data.title){
    res.json({
      status:'fail',
      message:'title or message must be provided'
    })
  }
  const db = await fspromise.readFile("./data.json", "utf-8");
  const arr = JSON.parse(db);
  const len = arr.length;
  const newProduct = data;
  if (len == 0) {
    newProduct.id = 1;
    // arr.push(newProduct);
    // console.log(arr);
    // fspromise.writeFile("./data.json", JSON.stringify(arr));
  }
   else {
    // const newProduct = data;
    newProduct.id = arr[len - 1].id + 1;
    // console.log(newProduct);
    
  }
  arr.push(newProduct);
  fspromise.writeFile("./data.json", JSON.stringify(arr));
  //res.send("work in progess");

  res.json({
    status:'success',
    results:1,
    data:{
      newProduct:newProduct,
    }
  })
}


const putProduct=async (req,res)=>{
  //  console.log(req);
const arr=JSON.parse(await fspromise.readFile("./data.json",'utf-8'));
   res.send("work in progress");
   const reqid=parseInt(req.params.id);
   const data=req.body;
   data.id=reqid;
   const newArr=arr.map((elem)=>{
    if(elem.id==reqid)
    return data;
   else
    return elem;
   })
   fspromise.writeFile("./data.json",JSON.stringify(newArr));
  //  console.log(data);
  //  const data=req.body;   
}

const deleteProduct=async(req,res)=>{
  const reqid=parseInt(req.params.id);
  const arr=JSON.parse(await fspromise.readFile("./data.json",'utf-8'));
  const newArr=arr.filter((elem)=>{
    if(elem.id===reqid)
    return false;
    else
    return true;
  });
  fspromise.writeFile("./data.json",JSON.stringify(newArr));
  res.status(204);
  res.json({
     status:"success",
     data:{
      newProduct:null,
     }
  })


}
module.exports={
  getAllProducts,
  addproduct,
  putProduct,
  deleteProduct
}