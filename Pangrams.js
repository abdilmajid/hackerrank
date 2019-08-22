function pan(str){
  let obj = {}
  // let loCase = str.toLowerCase()
  let otherChar = str.match(/[a-z]/gi).join('').toLowerCase()
  

  for(let char of otherChar){
    if(obj[char]) obj[char]++
    else obj[char] = 1
  }

  if(Object.keys(obj).length===26) return `panagram`
  else return `not pangram`
}




console.log(pan(`We promptly  judged antique. ivory buckles for the prize`))