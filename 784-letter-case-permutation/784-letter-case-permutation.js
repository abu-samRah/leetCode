/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(nums) {
  let permutations = [];
  permutations.push('');
    
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    
    // we will take all existing permutations and add the current number to create new permutations
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      if(!isNaN(currentNumber)){
      permutations[p]+=currentNumber
    }else{
      const temp = permutations[p]
      permutations[p]+=currentNumber
      let newNum = ''
      if (currentNumber == currentNumber.toLowerCase()) {
      newNum = currentNumber.toUpperCase();
      }
      else {
        newNum = currentNumber.toLowerCase();
      }
      permutations.push(temp+newNum)
    }
      
      
    }
  }

  return permutations;
};