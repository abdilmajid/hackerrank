function recur(arr){
  let obj = {}
  for(let char of arr){
    if(obj[char]) return char
    else obj[char] = 1
    console.log(obj)
  }

}

console.log(recur(`DBCABA`))






