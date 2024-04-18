// console.log('hello ');

const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj);

const page = `
<div>$searchBar$</div>
<div>$card$</div>
`;
const cardTemplate = `

<div clas'product-card'>
<h3>$TITLE$</h3>
<img src="$img$">
<a href="$link$">More info</a>
<h4>price = $price$</h4>
</div>

`;
const productTemplate = `
<head>
<style>
/* CSS for the header */
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}
</style>
</head>
<div clas'product-template'>
<header>
  <h1>Product Page</h1>
</header>
<h3>$TITLE$</h3>
<img src="$img$">
<p>$des$</p>
<h3>Price = $price$</h3>
<h3>rating = $rating$</h3>
<h3>Discount = $dis$</h3>

</div>
`;
const searchTemplate = `
<form action='/product'>
   <input type="text" name="productName">
   <button type="submit">search</button>
</form>


`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = cardTemplate;
  temp = temp.replace("$TITLE$", dataObj[i].title);
  temp = temp.replace("$img$", dataObj[i].images[0]);
  temp = temp.replace("$link$", `/product?id=${i}`);
  temp = temp.replace("$price$", dataObj[i].price);

  result.push(temp);
}
// console.log(result);

result = result.join(" ");
//page=page.replace('$card$',result);

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });

  const { pathname, query } = url.parse(req.url, true);
  //console.log("\n", query, "\n");
  const q = pathname.query;
  if (pathname === "/home") {
    res.end(searchTemplate + result);
    // res.end(searchTemplate);
  } 
  else if (pathname === "/product") {
    const pname = query.productName;
     if (query.id) {
        let tem = productTemplate;


        tem = tem.replace("$TITLE$", dataObj[query.id].title);
        tem = tem.replace("$img$", dataObj[query.id].images[0]);
        tem = tem.replace("$des$", dataObj[query.id].description);
        tem = tem.replace("$price$", dataObj[query.id].price);
        tem = tem.replace("$rating$", dataObj[query.id].rating);
        tem = tem.replace("$dis$", dataObj[query.id].discountPercentage);
        res.end(tem);
      }

      else if(pname){
        console.log(pname);
        const searchName=dataObj.filter((elem)=>{
          if(elem.title.includes(pname)){
            return true;
          }
          else
          {
           return false;
          }
        })
        res.end(JSON.stringify(searchName));
      }
    //  if(pname){
    //   res.end(pname);
    //  }
    //  else{
    //   res.end('<h3>error</h3>')
    //  }

    //  res.end(`<div>
    //   <h4>${dataObj[query.id].title}</h4>
    //  </div>`
    // );
  } else {
    res.end("404 not found");
  }
  //res.end(result);
});

server.listen(1400);
