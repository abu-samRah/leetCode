/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length 
    
    while(low < high){
        const mid = low + Math.floor((high - low) / 2)
        if(nums[mid] >= target) high = mid
        else low = mid + 1
    }
    
    return high
    
};