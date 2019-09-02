
// Assuming arrays not sorted
function getTotalX(a, b) {
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  let count = 0
  let arr = []
  let a1 = 0
  let b1 = 0

// Finding Greatest common Multiple of two numbers
function gcm(num1,num2){
  while(num2){
    let num = num2
    num2 = num1%num2;
    num1 = num
  }
  return num1
}

function gcmPlus(nums){
  let x = nums[0]
  for(let i=1;i<nums.length;i++){
    y = nums[i]
    x = gcm(x,y)
  }
  return x
}

for(let i=0;i<=100;i++){
  if(a.length<=1){
    a1 = a[0]
  }
  else {
    a1 = gcmPlus(a)
  }
}



console.log(a1)

}



getTotalX([2],[16,32,96])

// Finding Greatest common Multiple of two numbers
function gcm(a,b){
  while(b){
    let num = b
    b = a%b;
    a = num
  }
  return a
}

// Finding Greatest common Multiple of 2+numbers
function gcmPlus(nums){
  let x = nums[0]
  for(let i=1;i<nums.length;i++){
    y = nums[i]
    x = gcm(x,y)
  }
  return x
}





// console.log(gcmPlus([30,20,12]))

























