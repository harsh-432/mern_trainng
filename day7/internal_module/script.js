// // reading file
// const fs= require('node:fs');

// const data = fs.readFileSync('./myReadme.txt');
// // console.log(data);
 
// console.log(data.toString());


//reading file while coverting it into data directly 
// const fs= require('node:fs');

// const data = fs.readFileSync('./myReadme.txt',{encoding:'utf-8'});
// console.log(data);
 
// // console.log(data.toString());




// const fs=require('fs');
// fs.writeFileSync('./log.txt',"harsh sharma");




// const fs= require('fs');
// console.log("start");
// const data = fs.readFileSync('./myReadme.txt',{encoding:'utf-8'});
// console.log(data);
// console.log("end");


// const fspromise= require('fs/promises');
// console.log("start");

// const pr=fspromise.readFile('./myReadme.txt',{encoding:'utf-8'});
// console.log(pr);
// pr.then((res)=>{
//   console.log(res);
//   //console.log(pr);
// })
// console.log(pr);
// console.log('end');



//callback in filesytem
// const fs=require('fs');

// fs.readFile('./myReade.txt',{encoding:"utf-8"},(err,data)=>{
//   console.log(data);
//   if(err){
//     console.log(err);
//   }
// })



// // create server
// const http=require('http');

// const app=http.createServer((req,res)=>{
//  console.log("request recieved");
//  console.log(req.url);
//  res.writeHead(200,{
//   'content-type': 'text/html',
//  })
//  res.end("<h1>hello harsh </h1>");
// });
// app.listen(4444,()=>{
//   console.log('......server started.......');
// });
// //to run you have to write npx nodemon script




//mini project
const http=require('http');
const fs=require('fs');
const  data=fs.readFileSync('./data.json','utf8');

const htmlTemplate=fs.readFileSync('./template/page.html',{encoding:'utf-8'});
const cardTemplate=fs.readFileSync('./template/card.html','utf-8');

const dataObj=JSON.parse(data);
//console.log(dataObj);
const product=dataObj.products;

// const htmlTemplate=` 
// <!DOCTYPE HTML>
// <html>
// <head></head>
// <body>
// __products__cards
// </body>
// </html>
// `
// const cardTemplate=` 

// <div class='product-card'>
// <h4>....title....</h4>
// <p>.....info....</p>
// </div>

// `


// const card1=cardTemplate.replace('....title....',products[0].title)
// .replace(".....info....",products[0].description);

// const card2=cardTemplate.replace('....title....',products[1].title)
// .replace(".....info....",products[1].description);


// allCards=card1+card2;

const allCards=product.map((elem)=>{
  let newCard =cardTemplate;
  newCard=newCard.replace('....title....',elem.title);
  newCard=newCard.replace('.....info....',elem.description);
  
  return newCard;
})

const page=htmlTemplate.replace('__products__cards',allCards);
const app=http.createServer((req,res)=>{
 console.log("request recieved");
 console.log(req.url);
 res.writeHead(200,{
  'content-type': 'text/html',
 })
 res.end(page);
});
app.listen(4444,()=>{
  console.log('......server started.......');
});