function gradingStudents(grades) {
  let g = grades.map(e => {
    if(e<=35) return e
    if((e+1)%5===0) e+=1 
    if((e+2)%5===0) e+=2
    return e
  })
  return g
}




console.log(gradingStudents([73,67,84,33]))