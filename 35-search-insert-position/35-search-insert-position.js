/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    if(target <= nums[0]) return 0
    while(true){
        if(start>end) return start
        const mid = Math.floor((start+end)/2)
        if(target === nums[mid]) return mid
        else if(target < nums[mid]) end = mid -1
        else start = mid + 1
    }
    
    
};