function getTotalX(a, b){
  a.sort((a,b) => a-b)
  b.sort((a,b) => a-b)

  let c = []
  let d = []
  for(let i=0;i<=100;i++){
    if(i>=a[a.length-1] && i<=b[0]){
      c.push(i)
    }
  }

  let gcd = (arr) => {
    let a = arr[0]
    let b 
    for(let i=1;i<arr.length;i++){
      b = arr[i]
      a = gcd_two(a,b)
    }
    return a
  }

  let gcd_two = (x,y)=>{
    while(y){
      let t = y
      y = x%y
      x = t
    }
    return x
  }

  let lcm = () => {
    let lgcd = gcd(a)
    let max = Math.max[a]
    let min = Math.min[a]
    return (max*min)/lgcd
  }
  

  maxA = lcm(a)
  maxB = gcd(b)

  for(let i=0;i<=b[b.length-1];i++){
    if(c[i]%maxA!==0) c.splice(i,1)
  }

  for(let i=0;i<=b[b.length-1];i++){
  if(maxB%c[i]===0) d.push(c[i])
  }

  console.log(c)
  console.log(maxA,maxB)
  console.log(a)

  // return d.length

}



console.log(getTotalX([3,4],[24,48]))





