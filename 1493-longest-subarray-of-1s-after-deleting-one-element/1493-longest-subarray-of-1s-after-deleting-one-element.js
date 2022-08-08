/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(arr) {
  let maxLength = 0
  let frequencyMap = {};
  const k =1
  
  let windowStart = 0 
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightNum = arr[windowEnd];
      
    frequencyMap[rightNum] = (frequencyMap[rightNum] || 0 ) +1
    
    if ((windowEnd - windowStart + 1 - frequencyMap[1]) > k) {
      let leftNum = arr[windowStart];
      frequencyMap[leftNum] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

   //console.log(maxLength,frequencyMap)
  return isNaN(frequencyMap[1])? 0 :maxLength-1;
};