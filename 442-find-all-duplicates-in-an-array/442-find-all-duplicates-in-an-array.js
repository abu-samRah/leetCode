/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  
  const ans = []
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      ans.push(nums[i])
    }
  }
    
    return ans
};