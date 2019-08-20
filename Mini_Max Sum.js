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

// Better solution: Assuming array with 5 elements
function minMax2(arr){
  let total = arr.reduce((a,b) => a+b, 0);
  let max = total - Math.max(...arr)
  let min = total - Math.min(...arr)
  console.log(min,max)
}


minMax2([1,3,5,7,9])