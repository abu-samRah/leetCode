/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(str, pattern) {
    let matched = 0
  const charFrequency = {};
  let ans = [0,Number.MAX_SAFE_INTEGER] 

  for (let i = 0; i < pattern.length; i++) 
    charFrequency[pattern[i]] = (charFrequency[pattern[i]] || 0) +1
    
  let windowStart = 0
  let windowEnd = 0
  for (; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    while (matched === Object.keys(charFrequency).length) {
        
      if((windowEnd-windowStart) < (ans[1] - ans[0])) {
          
          ans = [ windowStart,windowEnd]
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



  return ans[1] === Number.MAX_SAFE_INTEGER ? '' : str.substring(ans[0],ans[1]+1);
};
    
/*
if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
*/
    