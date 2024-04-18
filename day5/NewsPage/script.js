console.log("...API STARTED");

function callAPI(){
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ffc3755c37c147799c44793024549eec")
  .then((res)=>res.json())
  .then((data)=>renderUI(data))
}




function renderUI(data){

  //got the article from data
  const articles=data.articles;

  //single articel from the articles array
  // console.log(articles);
  const root=document.getElementById("root");
  

  for(let i=0;i<articles.length;i++){
    const ar=articles[i];
  // console.log(ar);
  //create parent div
  const div=document.createElement("div");
  div.setAttribute('class',"new-card");
  const h3=document.createElement('h3');
  const img=document.createElement('img');
   img.src= ar.urlToImage;
  h3.innerText=ar.title;
   div.appendChild(h3);
  div.appendChild(img);
  root.appendChild(div);
  }
  // const ar=articles[4];
  // console.log(ar);
  // //create parent div
  // const div=document.createElement("div");
  // div.setAttribute('class',"new-card");
  // const h3=document.createElement('h3');
  // const img=document.createElement('img');
  //  img.src= ar.urlToImage;
  // h3.innerText=ar.title;
  //  div.appendChild(h3);
  // div.appendChild(img);
  // root.appendChild(div);
}

// renderUI();

callAPI();