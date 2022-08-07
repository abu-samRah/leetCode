/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = Number.NEGATIVE_INFINITY
    let limit = 2
    const types = {}
    
    let startWindow = 0
    for(let endWindow =0; endWindow<fruits.length; endWindow++){
        types[fruits[endWindow]] = (types[fruits[endWindow]] || 0) +1
        
        if(endWindow - startWindow >= 2 && Object.keys(types).length > 2){
            types[fruits[startWindow]] = --types[fruits[startWindow]] 
            if(!types[fruits[startWindow]]) delete types[fruits[startWindow]]
            startWindow++
        }
        max = Math.max(max,endWindow-startWindow+1)
    }
    return max
    
};

/*
max = -infinity
k = 2
types = {2:3,3:1}
[1,2,3,2,2]
   s     e
startWindow,endWindow

*/