/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  let wordFrequency = {};

  words.forEach((word) => {
     wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  const resultIndices = [];
  let wordsCount = words.length;
  let wordLength = words[0].length;

  for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      let next_word_index = i + j * wordLength;
     
      let word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) { 
        break;
      }

      wordsSeen[word] = (wordsSeen[word] || 0) + 1
        
      if (wordsSeen[word] > wordFrequency[word]) {
        break;
      }

      if (j + 1 === wordsCount) { 
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
};