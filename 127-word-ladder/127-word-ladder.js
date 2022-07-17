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
    
    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;  
};
    
    
const isGoal = (currWord, endWord) =>{
    return currWord === endWord 
}

const check = (currWord, toWord,wordSet) =>{
    if(currWord.length !== toWord.length || !wordSet.has(toWord)) return false
    
    let count = 0
    
    for(let i =0; i< currWord.length; i++){
        if(currWord[i] !== toWord[i]) count++
    }
 
    return count === 1
}