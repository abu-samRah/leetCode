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
    
  
      result+=right-left+1
    
  }
  
  return result;
    
};