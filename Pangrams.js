function pangrams(s){
  let obj = {}
  let otherChar = s.match(/[a-z]/gi).join('').toLowerCase()
  
  for(let char of otherChar){
    if(obj[char]) obj[char]++
    else obj[char] = 1
  }

  if(Object.keys(obj).length===26) return `pangram`
  else return `not pangram`
}




console.log(pangrams(`We promptly  judged antique. ivory buckles for the prize`))