/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
   const queue = [beginWord]
   let ans = 1
   const wordSet = new Set(wordList)
   let currLen = queue.length, i =0
   
   while(i<currLen){
       const front = queue.shift()
       
       if(isGoal(front,endWord)) return ans
       
       for(let i=0; i<wordList.length; i++){
           if(check(front,wordList[i],wordSet)){
               queue.push(wordList[i])
               wordSet.delete(wordList[i])
           } 
       }
       i++
       
       if(i>=currLen){
           ans++
           currLen = queue.length
           i = 0
       }
   }
    
    return 0
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