const arr = [5,5,7,7,8,8,8,8,8,10,11,12,13,40]
const arr2 = [2,2]

// Solution1
function ar(arr,target){
  let start = arr.indexOf(target)
  // let count = 0
  let last = 0
  for(let i=start;i<=arr.length;i++){
    // if(arr[i] === target) count++
    if(arr[i+1]!==target) {
      last = i
      break
    }
    if(start === -1){
      last = -1
      break
    }
  }
  return [start,last]
}


console.log(ar(arr,2))

