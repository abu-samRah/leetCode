/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j =0
    for(let i=0; i<nums.length; i++){
        if(nums[j] !== nums[i]){
            nums[++j] = nums[i]
        }
    }
    return ++j
};