/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(str, pattern) {
  let matched = 0
  const charFrequency = {};
  let substrStart = 0
  let minLen = str.length + 1

  for (let i = 0; i < pattern.length; i++) 
    charFrequency[pattern[i]] = (charFrequency[pattern[i]] || 0) +1
    
  let windowStart = 0
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      if(windowEnd-windowStart + 1 < minLen) {
          minLen = windowEnd-windowStart+1
          substrStart = windowStart
      }
      
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
        
    }

  return minLen > str.length  ? '' : str.substring(substrStart, substrStart + minLen);
};
    