// const firstNameChange =(e)=>{
//   //console.log('firstname');
//   //console.log(e);
//   const value=e.target.value;
//   if(value.length>4){
//     console.log('corect');
//   }
  
// }

// const submitForm =(e)=>{
//   e.preventDefault();
//  const t=e.target;
//  for(let i=0;i<t.length;i++)
//  { const ty= t[i].type;
//    const vl=t[i].value;
//    console.log(ty,vl);
//    if(ty=="checkbox")
//    {
//     console.log(t[i].checked);
//    }
//  }

// }



const submitForm =(e)=>{
  e.preventDefault();
  const t=e.target;
  const res={
    hobbies:[],
  };

  for(let i=0;i<t.length;i++){
    const ty=t[i].type;
  if(ty!='submit'){
    const vl=t[i].value;
    const mn=t[i].name;

    if(ty=="checkbox"  && t[i].checked){
      res.hobbies.push(vl);
    }
    if(ty!='checkbox'){
      res[mn]=vl;
    }
  }
  }
  console.log(res);
}