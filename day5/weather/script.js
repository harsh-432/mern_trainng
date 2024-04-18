console.log("hello");

function fetchapi(){
  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=V5QWY8Y5E73VJ2QHC2N7TK36D")
  .then((res)=>res.json()).then((data)=>renderUI(data))
}


const root=document.getElementById("root");
function renderUI(data){
  const days=data.days;
  console.log(days);

  const row=document.createElement("tr");
  let cell1=document.createElement("th");
  cell1.innerText="date";
  row.appendChild(cell1);

  let cell2=document.createElement("th");
  cell2.innerText="max temp";
  row.appendChild(cell2);
  
  let cell3=document.createElement("th");
  cell3.innerText="min temp";
  row.appendChild(cell3);

  let cell4=document.createElement("th");
  cell4.innerText="min temp";
  row.appendChild(cell4);


  root.appendChild(row);

  for(let i=0;i<days.length;i++){
  const childrow=document.createElement("tr");
  let cell11=document.createElement("td");
  cell11.innerText=days[i].datetime;
  childrow.appendChild(cell11);

  let cell12=document.createElement("td");
  cell12.innerText=days[i].tempmax;
  childrow.appendChild(cell12);
  
  let cell13=document.createElement("td");
  cell13.innerText=days[i].tempmin;
  childrow.appendChild(cell13);

  let cell14=document.createElement("td");
  cell14.innerText=days[i].temp;
  childrow.appendChild(cell14);
  

  root.appendChild(childrow);
}


}

fetchapi();