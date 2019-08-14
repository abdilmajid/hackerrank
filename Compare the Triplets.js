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
