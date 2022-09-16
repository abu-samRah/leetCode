/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map()
    for (let i = 0; i < inorder.length; i++)
        map.set(inorder[i], i)
    return splitTree(preorder, map, 0, 0, inorder.length-1)
};

var splitTree = function(preorder, map, preIdx, start, end) {
    let rval = preorder[preIdx],
        root = new TreeNode(rval),
        mid = map.get(rval)
    if (mid > start)
        root.left = splitTree(preorder, map, preIdx+1, start, mid-1)
    if (mid < end)
        root.right = splitTree(preorder, map, preIdx+mid-start+1, mid+1, end)
    return root
}