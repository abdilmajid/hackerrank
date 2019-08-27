function h(str){
  let word = `hackerrank`
  let count = 0
  
  for(let char in word){
    if(str[char]===word[count]){
      count++
      console.log(char)
      console.log(count)
    }
  }
  if(count<5) return `NO`
  else return `Yes`


}

console.log(h(`hhaacckkekraraannk`))












