function minimumNumber(n, password) {
  let r = 0
  let minDigit = /(?=.*\d)./g
  let minLower = /(?=.*[a-z])./g
  let minUpper = /(?=.*[A-Z])./g
  let minSpecial = /(?=.*[!@#$%^&*()\-+])./g
  
  if(!minDigit.test(password)) r++
  if(!minLower.test(password)) r++
  if(!minUpper.test(password)) r++
  if(!minSpecial.test(password)) r++



  return Math.max(r,6-n)

}





console.log(minimumNumber(7,`AUzs-nV`))