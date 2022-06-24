/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const myMap = {}
    const A = nums1.length < nums2.length ? nums1 : nums2
    const B = nums1.length < nums2.length ? nums2 : nums1
    const res = []
    
    for(let i =0; i<A.length ; i++) myMap[A[i]] = 1
    for(let i =0; i<B.length ; i++){
        if(myMap[B[i]]){
            res.push(B[i])
            myMap[B[i]]--
        }
    }
    return res
};