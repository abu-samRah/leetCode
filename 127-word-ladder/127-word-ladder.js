/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;
    
   while (queue.length) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const word = queue.shift();
            if (word === endWord) return steps;
            
            for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < 26; k++) {
                    const newWord = word.slice(0, j) + String.fromCharCode(k + 97) + word.slice(j + 1);
                    if (wordSet.has(newWord)) {
                        queue.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        
        steps++;
    }
    return 0;    
};