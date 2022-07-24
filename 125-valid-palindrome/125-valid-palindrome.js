/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphanumericString  = s.replace(/[^0-9a-z]/gi, '')
    const finalString = alphanumericString.toLowerCase()
    let isValidPalindrome = true
    for(let i =0, j =finalString.length -1; i<j ; i++,j--){
      if(finalString[i] !== finalString[j]) {
        isValidPalindrome = false
        break
      }
    }
    return isValidPalindrome
};