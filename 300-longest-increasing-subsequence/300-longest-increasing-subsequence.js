/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const len = nums.length
    const LIS = new Array(len).fill(1)
    
    for(let i=len-1; i>=0; i--){
        let j = i+1
        while(j<len){
          if(nums[i] < nums[j])
            LIS[i] = Math.max(LIS[i] , 1 + LIS[j])
          j++
        }
          
    }
    
    return Math.max(...LIS)
    
};