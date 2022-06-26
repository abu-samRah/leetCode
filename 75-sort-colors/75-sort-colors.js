/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = {}
    const length = nums.length -1
    for(let i =0;i<nums.length;i++) map[nums[i]] = (map[nums[i]] || 0) + 1
    let i = 0
    for(const ball in map){
        while(map[ball]){
            nums[i] = ball
            map[ball]--
            i++
        }
    }
    
    return nums
};