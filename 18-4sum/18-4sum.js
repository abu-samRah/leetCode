/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
  arr.sort((a, b) => a - b)
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}


function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while ((left < right)) {
    let sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) { 
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while ((left < right && arr[left] === arr[left - 1])) {
        left += 1; 
      }
      while ((left < right && arr[right] === arr[right + 1])) {
        right -= 1;
      }
    } else if (sum < targetSum) {
      left += 1; 
    } else {
      right -= 1; 
    }
  }
}