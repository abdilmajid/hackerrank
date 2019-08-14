/* Question: 
      - Create function with 2 parameter(which are arrays)
      - compare values at each index position
      - award points to the larger value at that position
      - output is array with 2 elements

      ex. 
      input: [5,6,7] & [3,6,10]
      output: [1,1] 
*/

function compareTriplets(a, b) {
  let final = []
  let p1 = 0
  let p2 = 0
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          p1 += 1
      } else if (a[i] < b[i]) {
          p2 += 1
      }
  }
  final.push(p1, p2)
  return final
}
