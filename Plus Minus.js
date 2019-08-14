
function plusMinus(arr) {
  let positive=0
  let negative=0
  let zeros=0
  arr.forEach(e => {
    if(e>0) positive++
    if(e<0) negative++
    if(e===0) zeros++
  });

  // print to 6 decimal places
  positive = positive/arr.length
  negative = negative/arr.length
  zeros = zeros/arr.length

console.log(Number(positive.toFixed(6)))
console.log(Number(negative.toFixed(6)))
console.log(Number(zeros.toFixed(6)))
}

const arr = [-4,3,-9,0,4,1]
console.log(plusMinus(arr))