/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let a1 = nums1.sort((a,b)=> a-b);
    let a2 = nums2.sort((a,b)=> a-b);
    let result = [];
    while(a1.length && a2.length){
        if(a1[0] === a2[0]){
            result.push(a1.shift());
            a2.shift();
        } 
        else if(a1[0] > a2[0]){
            a2.shift();
        }else{
            a1.shift();
        }
    }
    return result
};