/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
  if(!s || s.length < 1) return ""
  let start = 0
  let end = 0
  
   const expandFromMiddle = (string,left,right) =>{
      
      if(!string || left> right) return 0
      while(left>=0 && right<string.length  && string[left]===string[right]){
          left--
          right++
      }
      return right - left - 1
  }
  
  for(let i=0;i<s.length; i++){
      let len1 = expandFromMiddle(s,i,i)
      let len2 = expandFromMiddle(s,i,i+1)

      let len = Math.max(len1,len2)
      
      if(len >(end -start) ){
          start = i - (len/2)
          end = i + (len/2)
      }
  }
    
    return s.substring(start+1,end+1)
};