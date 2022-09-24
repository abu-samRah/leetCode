/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = []
    const part = []
    
    const dfs = (i) =>{
        if(i>=s.length){
            ans.push([...part])
            return
        }
        
        for(let j=i; j<s.length; j++){
            const currStr = s.substring(i,j+1)
            if(isPalindrome(currStr)){
                part.push(currStr)
                dfs(j+1)
                part.pop()
            }
        }
    }
    
    dfs(0)
    return ans
};

const isPalindrome = (str)=>{
    let i=0
    let j=str.length -1
    
    while(i<j){
        if(str[i] !== str[j]) return false
        i++
        j--
    }
    
    return true
}