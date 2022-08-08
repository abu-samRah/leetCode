/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(str, k) {
  let maxLength = 0
  let maxRepeatLetterCount = 0
  let frequencyMap = {};

  let windowStart = 0 
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
      
    frequencyMap[rightChar] = (frequencyMap[rightChar] || 0 ) +1
    
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);
    
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      let leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;




    
};