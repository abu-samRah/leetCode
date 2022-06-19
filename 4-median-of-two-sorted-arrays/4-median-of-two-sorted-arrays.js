/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let A = nums1 
   let B = nums2
   const total = A.length + B.length
   const half = Math.floor(total/2)
  
   if(B.length < A.length) [A,B] = [B,A]
   let l = 0
   let r = A.length -1
    while(true){
        let i = Math.floor((l+r)/2)
        let j = half - i -2
        
        let Aleft = i >=0 ? A[i] : Number.NEGATIVE_INFINITY
        let Aright = i+1 < A.length ? A[i+1] : Number.POSITIVE_INFINITY
        let Bleft = j >=0 ? B[j] : Number.NEGATIVE_INFINITY
        let Bright = j+1 < B.length ? B[j+1] : Number.POSITIVE_INFINITY
        
        if(Aleft <= Bright && Bleft <= Aright){
            if(total % 2){
                return Math.min(Aright,Bright)
            }else{
                return (Math.max(Aleft,Bleft) + Math.min(Aright,Bright)) /2 
            }
        }else if(Aleft > Bright){
            r = i-1
        }else{
            l = i+1
        }
    }
    
    
};