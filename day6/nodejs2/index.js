let figlet=require('figlet');

figlet("hello harsh",(err,data)=>{
  console.log(data);
});

// fetch("https://api.github.com/users/deepak3440").then((res)=>{
//   return res.json();
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log("err occured");
// })

// async function getapi(){
//   const pr= await fetch('https://api.github.com/users/deepak3440');
//   const data= await pr.json();
//   console.log(pr);
// }
// getapi();


// console.log("start");
// async function getapi(){
//   console.log("api calling");
//   const pr=await fetch("https://api.github.com/users/deepak3440");
//   console.log("api calling");
//   const data=await pr.json();
//  console.log("fetched data");
// }
// getapi();
// console.log("end");



console.log('start');
async function callAPI(){
  const pr1=new Promise((res,rej)=>{
    console.log("promise1..");
    setTimeout(()=>{
      console.log('timeout 1...');
    },1000);
  })
  console.log("promise 1 completed"); 
}
callAPI();
