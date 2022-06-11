var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubStrlen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      //add it to the set
      set.add(s.charAt(right));

      //get the maximum length
      maxSubStrlen = Math.max(maxSubStrlen, set.size);
      //update rigth
      right++;
    } else {
      //If the set has duplicate character
      //delete the duplicate char
      set.delete(s.charAt(left));
      //update left
      left++;
    }
  }
  return maxSubStrlen;
};
