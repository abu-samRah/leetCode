/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>9){
        let sum = 0
        for(let i=num; i>0;i= Math.floor(i/10)){
            const curr = i % 10
            sum += curr
        }
        num = sum
    }
    
    return num
};