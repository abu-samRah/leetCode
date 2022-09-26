/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const prefix_sum = {0:1}
    let ans = 0
    let sum = 0
    
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let reminder = sum % k
        
        if(reminder<0) reminder+=k
        
        if(prefix_sum[reminder]) {
             ans+= prefix_sum[reminder]
        }
        
        prefix_sum[reminder] = (prefix_sum[reminder] || 0) + 1
        
        
    }
    
    return ans
};