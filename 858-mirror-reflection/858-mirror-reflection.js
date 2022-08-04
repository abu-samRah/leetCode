/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const mirrorReflection = (p, q) => {
    if (p & 1) {
        if (q & 1) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (q & 1) {
            return 2;
        } else {
            let g = gcd(p, q);
            p /= g;
            q /= g;
            return mirrorReflection(p, q);
        }
    }
};