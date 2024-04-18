let arr=[2,10,21,32];
function printPretty(elem){
  console.log(':',elem);

}
// function printArray(arr){
//   // for(let i=0;i<arr.length;i++){
//   //   printPretty(arr[i]);
//   // }
//   arr.forEach((a,b,c,d)=>{
//     console.log(':',a,b,c,d);
//   });
// }

// printArray(arr);

setTimeout(printPretty(arr),10000);