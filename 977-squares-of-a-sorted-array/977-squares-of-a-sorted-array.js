/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
   let   squares = []
  // TODO: Write your code here

  let j = 0
  while(j<arr.length){
    if(arr[j] >= 0) break
    j++
  }

  let i = j-1

  while(i>=0 && j<arr.length){
    if(Math.abs(arr[i]) < Math.abs([arr[j]])){
      squares.push(Math.pow(arr[i],2))
      i--
    }else{
      squares.push(Math.pow(arr[j],2))
      j++
    }
  }
  while(i>=0){
    squares.push(Math.pow(arr[i],2))
    i--
  }

   while(j<arr.length){
     squares.push(Math.pow(arr[j],2))
      j++
  }
  return squares;
};