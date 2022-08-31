/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    let x =0
  let y =arr.length-1

  for(let i=0; i<arr.length; i++){
    if(i>y) break

    if(arr[i] === 0){
      [arr[i],arr[x]] = [arr[x],arr[i]]
      x++
      i--
    }else if(arr[i] === 2){
      [arr[i],arr[y]] = [arr[y],arr[i]]
      y--
      i--
    }
    while(x>i+1) i++
  }

  return arr
};