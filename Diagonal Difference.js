function diagonalDifference(arr){
  let pDiag = 0
  let sDiag = 0
  for(let i=0;i<arr.length;i++){
    pDiag += arr[i][i]
    sDiag += arr[i][arr.length-(1+i)]
    }
    let totalNum = Math.abs(pDiag-sDiag)
  return totalNum
}


//test
const arr = [[1,5,7,89,1,54],[54,5,8,1,2,3],[4,5,6,8,71,5],[6,3,2,5,7,8],[1,5,8,9,7,1],[95,15,45,7,8,6]]

console.log(diagonalDifference(arr))// 136