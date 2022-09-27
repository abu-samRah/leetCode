/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(nums, target) {
     let low = 0
  let high = nums.length -1

  while(low<=high){
    let mid = low + Math.floor((high-low)/2)
    //if(nums[mid] === target) return nums[mid]
    if(target < nums[mid]) high = mid - 1
    else low = mid+1
  }

  return nums[low] ?? nums[0]
};