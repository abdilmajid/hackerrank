function divisibleSumPairs(n, k, ar) {
  let count = 0
  for(let i=0;i<=100;i++){
    for(let j=0;j<=100;j++){
      if((ar[i]+ar[j])%k===0 && i<j){
        console.log(i,j)
        count++
      }
    }
  }
  
  return count
}


console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))