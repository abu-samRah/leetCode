/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefix_sum = {}
    let ans = 0
    let sum = 0
    
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        if(sum === k) {
            ans++
        }
        
        if(prefix_sum[sum - k]) {
             ans+= prefix_sum[sum - k]
        }
        
        prefix_sum[sum] = (prefix_sum[sum] || 0) + 1
        
        
    }
    
    return ans
};