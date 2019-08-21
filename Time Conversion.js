function timeConversion(s){
  let a = s.match(/(am|pm)/ig).join()
  let time = s.split(a)
  let time2 = time[0].split(`:`)
  let change = parseInt(time2[0])

  
  if(/pm/ig.test(s) 
    && time2[0]!==`12`) change +=12
  if(/am/ig.test(s)
    && time2[0]===`12`) change -=12 
  
  let string = change.toString()
  time2[0] = string

  return time2.join(`:`)
}

timeConversion(`07:05:45AM`)