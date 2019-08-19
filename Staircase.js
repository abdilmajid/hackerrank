function staircase(n) {
  for (let i = n-1; i >=0; i--){
      let stair = ``
      for (let j = 0; j < n; j++){
          if (i <= j) stair += `#`
          else stair += ` `
      }
      console.log(stair)
      // console.log([stair, stair.length])   
  }
}

staircase(6)