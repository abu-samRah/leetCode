/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const rootChecker = (first, second) => {
        if(!first && !second) return true
        if(!first || !second || first.val !== second.val) return false
        return rootChecker(first.left,second.left) && rootChecker(first.right,second.right)
    }

var isSubtree = function(root, subRoot) {
    if(!root) return false
    return rootChecker(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

