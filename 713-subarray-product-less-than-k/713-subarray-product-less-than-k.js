/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(arr, target) {
    let result = 0,
    product = 1,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left <= right)) {
      product /= arr[left];
      left += 1;
    } 
    
    for (let i = right; i > left - 1; i--) {
      result++
    }
  }
  
  return result;
    
};