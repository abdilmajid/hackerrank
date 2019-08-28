
// Assuming arrays not sorted
function getTotalX(a, b) {
  a.sort((a,b) => a-b)
  b.sort((a,b) => a-b)
  let count = []

  // Loop through only nums between two arrays
  for(let i=a[a.length-1];i<=b[0];i++){
    for(let j=0;j<=b.length;j++){
      if(i%a[j]===0 && i%a[j+1]===0 && b[j]%i===0){
        // console.log(i)
        count.push(i)
      }
    }
  }

  for(let i=0;i<=count.length;i++){
    if(count[i]===count[i+1]){
      count.splice(i,1)
    }
  }

  return console.log(count.length)
}



getTotalX([2,4],[16,32,96])