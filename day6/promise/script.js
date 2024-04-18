// console.log("start");
//  setTimeout(()=>{console.log("timeout")},0);
//  console.log("end");


//promises
//  const pr=new Promise((resolve,reject)=>{
//   if(true){
//     resolve();
//   }
//   else{
//     reject();
//   }
//  });


//resolved
// const pr=new Promise((resolve,reject)=>{
//   setTimeout(()=>{resolve("done123");},10000);
//  });

//  pr.then((res)=>{
//   console.log(res);
//  }
// )

//rejected

// setTimeout(()=>{cconsole.log("first timeout...")},0);
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("the item is out of stock");},0);
//    });
//     console.log(pr);

//     pr.then((res)=>{
//     console.log(res);
//    }).catch((err)=>{
//     console.log(err);
//   })



  setTimeout(function abc(){
    console.log('i am one');
  },0);

  const pr=new Promise((res,rej)=>{
    setTimeout(()=>{res('done')},0);
  })


  pr.then(function b(res){
    console.log('promise compled:',res);

  })

  setTimeout(function abc(){
    console.log('i am two');
  },0);
  