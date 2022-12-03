/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(str, pattern) {
  let matched = 0
  const charFrequency = {};
  let ans = ''
  let i = 0; let j = Infinity
  for (let i = 0; i < pattern.length; i++) 
    charFrequency[pattern[i]] = (charFrequency[pattern[i]] || 0) +1
    
  let start = 0
  let end = 0

  while(end<str.length){
    const currLetter = str[end]
    if(currLetter in charFrequency){
      charFrequency[currLetter] = --charFrequency[currLetter]
      if(charFrequency[currLetter] === 0 ) matched++
    }

    while(matched === Object.keys(charFrequency).length ) {
      if(end-start < j - i){
        i = start
        j = end
      }
     
     const charToRemove = str[start++]
     if(charToRemove in charFrequency){
        if(charFrequency[charToRemove]===0)matched--
        charFrequency[charToRemove] = charFrequency[charToRemove] + 1
      }

    }

    end++

  }

   ans = str.substring(i,j+1)

  return  j === Infinity ? '' : ans
};
    