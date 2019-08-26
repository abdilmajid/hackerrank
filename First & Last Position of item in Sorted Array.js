const arr = [5,5,7,7,8,8,8,8,8,10,11,12,13,40]

function ar(arr,target){
  let start = arr.indexOf(target)
  let count = 0
  let last = 0
  for(let i=start;i<=arr.length;i++){
    if(arr[i] === target) count++
    if(arr[i]>target) {
      last = i-1
      break
    }
  }
  return [start,last,count]
}

console.log(ar(arr,8))