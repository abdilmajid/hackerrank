function superReducedString(s) {
    let mat=/(.?)\1/ig
    if(s.match(mat).join('')===``) {
      if(s===``) return `Empty String `
      else return s
    }
  
    let newStr = s.replace(mat, '')
    return superReducedString(newStr)
  }
  
// console.log(superReducedString(`aa`))
console.log(superReducedString(`aaabccddd`))