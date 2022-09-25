/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let i = nums[0]
   let max = nums[0]
   for(let x= 1;x<nums.length; x++){
       i = Math.max(nums[x], nums[x] + i)
       max = Math.max(max,i)
   }
    
    return max
};