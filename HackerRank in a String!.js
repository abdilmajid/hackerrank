function hackerrankInString(s){
  let word = `hackerrank`
  let word1 = word.split('')

  for(let i=0;i<=s.length;i++){
    if(s[i]===word1[0]){
      word1.shift()
    }
  }

  if(word1.length>=1) return `NO`
  else return `YES`

}

console.log(hackerrankInString(`rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt`))












