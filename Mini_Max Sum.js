function minMax(arr){
  let minSort = arr.sort((a,b) => a - b)
  let maxSort = [...minSort].reverse()
  let min = 0
  let max = 0
  for(let i=0;i<=3;i++){
    min += minSort[i]
    max += maxSort[i] 
  }
  console.log(min,max)
}



minMax([1,3,5,7,9])