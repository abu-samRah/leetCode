/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const seen = {}
    const dfs = (currString) =>{
        if(currString.length > s.length) return false

        if(currString === s) return true
        
        for(let i =0; i<wordDict.length; i++){
            const newString = currString + wordDict[i]
            if(!seen[newString] && s.includes(newString)){
                seen[newString] = true
                if(dfs(newString)) return true
            }
        }
        
        return false
    }
    
    return dfs('')
    
};