function kangaroo(x1, v1, x2, v2) {
  for(let i=0;i<=10000;i++){
    let test = ``
    if((x1+v1*i)===(x2+v2*i)) return test += `YES`
  }
  return `NO`
}

console.log(kangaroo(0,2,5,3))

