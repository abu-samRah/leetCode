/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const mirrorReflection = (p, q) => {
    if(isEven(p) && isEven(q)) {
     let g = gcd(p, q);
     p /= g;
     q /= g;
    }
    if(isOdd(p) && isEven(q)) return 0
    if(isOdd(p) && isOdd(q))  return 1
    if(isOdd(q) && isEven(p)) return 2
};

const isEven = (a) => a % 2 === 0
const isOdd =  (a) => a % 2 !== 0