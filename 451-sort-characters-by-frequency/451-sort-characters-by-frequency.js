/**
 * @param {string} s
 * @return {string}
 */


var frequencySort = function(s) {
    let map = {}
    let arr = []
    for(let i=0; i<s.length ; i++){
        map[s[i]] = (map[s[i]] || 0) + 1
    }
    
    for(const key in map)
       arr.push({val:key , freq: map[key] })
    
    arr = arr.sort((a,b) => b.freq - a.freq)
    
    const finalArray = []
    arr.map(a => {
        let freq = a.freq
        while(freq){
            finalArray.push(a.val)
            freq--
        }
            
    } )
    
    return finalArray.join('')
};