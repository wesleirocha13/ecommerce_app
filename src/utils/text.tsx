//Faz tratativa do tamanho da descrição
export const shortenDescription = (description:string, maxLength:number)=>{
  if(description.length > maxLength){
    return description.substring(0,maxLength-3)+'...';
  }
  return description;
}

//Faz tratativa do tamanho do titulo
export  const shortenTitle = (title:string, maxLength:number)=>{
  if(title.length > maxLength){
    return title.substring(0,maxLength-3)+'...';
  }
  return title;
}
