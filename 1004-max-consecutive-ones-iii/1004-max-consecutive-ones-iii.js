/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(arr, k) {
  let maxLength = 0
  let maxRepeatOnes = 0
  let frequencyMap = {};

  let windowStart = 0 
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightNum = arr[windowEnd];
      
    frequencyMap[rightNum] = (frequencyMap[rightNum] || 0 ) +1
    
    maxRepeatOnes = frequencyMap[1];
    
    if ((windowEnd - windowStart + 1 - maxRepeatOnes) > k) {
      let leftNum = arr[windowStart];
      frequencyMap[leftNum] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
    //console.log(frequencyMap)
  return isNaN(frequencyMap[1])? k :maxLength;
};