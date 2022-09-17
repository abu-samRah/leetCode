/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(nums, target) {
     let low = 0
  let high = nums.length

  while(low<high){
    let mid = low + Math.floor((high-low)/2)
    
    if(nums[mid] > target) high = mid
    else low = mid+1
  }

  return nums[high] ? nums[high] : nums[0]
};