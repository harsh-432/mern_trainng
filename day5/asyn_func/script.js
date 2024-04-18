// //  console.log('gec start'); 

//  function printPretty(elem){
//   console.log('prettyStart');
//   let ans=2+3;
//   console.log(ans);
//   console.log('pretty end');
//  }
 
// //  setTimeout(printPretty,10000);
// //  console.log("gec end");


// const btn=document.getElementById('btn');
// btn.addEventListener('click',printPretty);



// console.log("starting");
// const res=fetch("https://api.github.com/user/deepak3440");
// console.log(res);
// res.then(()=>console.log('fetched'));
// console.log("ending");



// console.log('start');

// const req=fetch('https://dummyjson.com/products/2')
// const res=req.then(res => res.json())
// res.then((data)=>console.log(data));
// console.log('enter');
    

console.log('start');

const req=fetch('https://dummyjson.com/products/2').then(res => res.json()).then((data)=>console.log(data))
// const res=req.then(res => res.json())
// res.then((data)=>console.log(data));
.catch((err)=>{
  console.log(err);
})
console.log('enter');

