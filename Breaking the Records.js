function breakingRecords(scores) {
  let max = 0
  let maxChar = scores[0]
  let min = 0
  let minChar = scores[0]

  for(let i=0;i<scores.length;i++){
    if(scores[i]>maxChar) {
      max++
      maxChar = scores[i]
    }
    else if(scores[i]<minChar){
      min++
      minChar = scores[i]
    }
  }
  return [max,min]
}



// breakingRecords([3,4,21,36,10,28,35,5,24,42])
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))