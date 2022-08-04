/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */


const mirrorReflection = (p, q) => {
    while (isEven(p) && isEven(q)) {
        p /= 2;
        q /= 2;
    }
    
    if(isEven(p)) return 2
    if(isEven(q)) return 0
    return 1
};

const isEven = (a) => a % 2 === 0
const isOdd =  (a) => a % 2 !== 0