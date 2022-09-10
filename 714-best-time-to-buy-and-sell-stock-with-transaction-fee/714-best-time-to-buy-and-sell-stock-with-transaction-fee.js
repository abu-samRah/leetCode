/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const cache = [...Array(prices.length)].map(e=> Array(2).fill(0))
    
    const dp = (pos,bought) =>{
        if(pos === prices.length) return 0
        if(cache[pos][+bought]) return cache[pos][+bought]
       
        if(!bought) 
            cache[pos][+bought] =  Math.max(cache[pos][+bought],dp(pos+1,true)- prices[pos] - fee)
        else 
            cache[pos][+bought] =  Math.max(cache[pos][+bought],dp(pos+1,false) + prices[pos])
        
         cache[pos][+bought] =  Math.max(cache[pos][+bought],dp(pos+1,bought))
        
        return cache[pos][+bought]
    }
    
    return dp(0,false)
};