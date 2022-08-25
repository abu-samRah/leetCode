/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   let low = 0
    let high = nums.length -1
    let index = -1
    let mid = -1
    while(low<=high){
         mid =  low + Math.floor((high - low) /2)
        if(nums[mid] === target) {
          index = mid
          break
        }
        if(nums[mid] < target)  low = mid+1 
        else high = mid-1 
    }
    if(index === -1) return [-1,-1]
      
    let j = mid
    while(!isNaN(nums[j]) && !isNaN(nums[j+1]) && nums[j] === nums[j+1]) j++

    let i = mid
    while(!isNaN(nums[i]) && !isNaN(nums[i-1]) && nums[i] === nums[i-1]) i--

    return [i,j]
};