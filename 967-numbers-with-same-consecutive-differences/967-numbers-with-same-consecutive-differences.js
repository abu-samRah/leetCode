/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    if(n===1) return [1,2,3,4,5,6,7,8,9]
    
    const ans = []
    
    const DFS = (N,num)=>{
        if(N === 0) return ans.push(num)
        
        const lastDigit = num % 10
        const firstNext = lastDigit - k
        const secondNext = lastDigit + k
        
        if(firstNext >= 0 && firstNext <= 9) DFS(N-1, (num*10)+firstNext)
        if(secondNext >= 0 && secondNext <= 9 && secondNext!== firstNext) DFS(N-1, (num*10)+secondNext)
        
    }
    
    for(let i=1; i<10;i++) DFS(n-1,i)
    
    return (ans)
};


/*
1 2 3 4 5 6 7 8 9
*/