/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
   let low = 0
   let high = nums.length -1
   while(low < high){
       const mid = low + Math.floor((high - low) / 2)
       if(nums[mid] > nums[mid+1]) high = mid
       else low = mid + 1
   }
    
    return high 
};