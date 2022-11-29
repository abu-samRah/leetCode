/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let answer = 0;
    nums = nums.filter((a, i, b) => a !== b[i + 1]); // Remove Flatlands
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] > nums [i] && nums[i] < nums[i + 1]) answer++; // Valley
        if (nums[i - 1] < nums [i] && nums[i] > nums[i + 1]) answer++; // Hill
    }
    return answer;
};