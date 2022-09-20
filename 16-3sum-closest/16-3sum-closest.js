/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
    
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1
    let right = arr.length - 1;
      
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) return targetSum; 

      if (Math.abs(target_diff) < Math.abs(smallest_difference) ) {
        smallest_difference = target_diff; 
      }


      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}

