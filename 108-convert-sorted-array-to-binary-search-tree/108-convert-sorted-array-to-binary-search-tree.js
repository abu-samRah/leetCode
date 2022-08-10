/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const midIndex =  Math.floor(nums.length/2)
    const root = new TreeNode(nums[midIndex])
    
    root.left = sortedArrayToBST(nums.slice(0,midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex+1))
    
   return root
};