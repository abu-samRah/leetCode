/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const numsLength = nums.length
  const permutations = []  
  permutations.push([]);
    
  for (let i = 0; i < numsLength; i++) {
    const currentNumber = nums[i];
   
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
        
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = [...oldPermutation]; 
        newPermutation.splice(j, 0, currentNumber); 
        permutations.push(newPermutation);
      }
    }
  }
  return permutations;
};