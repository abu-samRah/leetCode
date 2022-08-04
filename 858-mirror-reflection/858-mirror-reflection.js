/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const mirrorReflection = (p, q) => {
    if(p % 2 !== 0 && q % 2 === 0) return 0
    if(p % 2 !== 0 && q % 2 !== 0) return 1
    if(p % 2 === 0 && q % 2 !== 0) return 2
    let g = gcd(p, q);
    p /= g;
    q /= g;
    if(p % 2 !== 0 && q % 2 === 0) return 0
    if(p % 2 !== 0 && q % 2 !== 0) return 1
    if(p % 2 === 0 && q % 2 !== 0) return 2
    
};