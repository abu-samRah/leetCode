/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let curry = 0
    for(let i =digits.length-1; i>=0; i--){
        if(digits[i] < 9){
            ++digits[i]
            curry = 0
            break;
        }else{
            digits[i] = 0
            curry = 1
        }
    }
    
    return !curry ? digits : [1,...digits]
};