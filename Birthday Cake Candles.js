
function birthdayCakeCandles(ar){
  let obj = {}
  let max = 0

  for(let char of ar){
    if(obj[char]) obj[char]++
    else obj[char] = 1
  }

  for(let char in obj){
    if(char>max) {
      max = obj[char]
    }
  }
  return max
}

// Better solution
// function bCake(ar){  
//   let maxNum = Math.max(...ar)
//   let a = ar.filter(e => e===maxNum);
//   return a.length
// }

console.log(birthdayCakeCandles([4,4,1,3,5,1,4,5,5]))
// console.log(bCake([4,4,1,3,5,1,4,5,5]))