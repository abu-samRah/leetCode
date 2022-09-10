/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2, i =text1.length, j =text2.length,dp=[...Array(i+1)].map(e=> Array(j+1))) {
    if(i === 0 || j === 0) return 0
   
    if(dp[i][j]) return dp[i][j]
    
    if(text1[i-1] === text2[j-1]) 
        dp[i][j] = 1+longestCommonSubsequence(text1, text2, i-1,j-1,dp)
    else 
       dp[i][j] = Math.max(longestCommonSubsequence(text1, text2, i-1,j,dp) , longestCommonSubsequence(text1, text2, i,j-1,dp))
    
    return dp[i][j] 
};