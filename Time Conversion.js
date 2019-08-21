function timeConversion(s){
  let a = s.match(/(am|pm)/ig).join()
  let time = s.split(a)
  let time2 = time[0].split(`:`)
  let change = parseInt(time2[0])
  let fix = ``

  if(/pm/ig.test(s) 
    && time2[0]!==`12`) change +=12
  if(/am/ig.test(s)
    && time2[0] === `12`) change -= 12


  let string = change.toString()
  if(change<10) fix += `0`

  time2[0] = fix.concat(string)

  
  console.log(time2.join(`:`))
}

timeConversion(`09:00:00AM`)