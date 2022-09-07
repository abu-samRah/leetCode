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
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return '';

    const left = tree2str(t.left);
    const right = tree2str(t.right);
    if (right) return `${t.val}(${left})(${right})`;
    else if (left) return `${t.val}(${left})`;
    else return `${t.val}`;
};