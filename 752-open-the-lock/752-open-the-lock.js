/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    
    let ans = 0
    const start = '0000'
    let queue = [start]
    let seen = {start:true}
    const deadendsSet = new Set(deadends)
    
    if (deadendsSet.has(start)) return -1 
    
    let currLen = queue.length, i =0
    
    while(i<currLen){
        const curr = queue.shift()
        
        if(isGoal(curr, target)) return ans
        
        for (let next of getNextStates(curr)) {
            if(check(next,deadendsSet,seen)){
                queue.push(next)
                seen[next] = true
            }
        }
        
        i++
        
        if(i>=currLen){
            ans++
            currLen = queue.length
            i = 0
        }
    }
    
    return -1
};


const isGoal = (curr, target) => target === curr

const check = (next,deadendsSet,seen) => !deadendsSet.has(next) && !seen[next]

function getNextStates(s = '0000') {
  const ans= [];
  
  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(0, i) + ((+s[i] + 1) % 10) + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((+s[i] + 9) % 10) + s.slice(i + 1));
  }
  
  return ans;
}