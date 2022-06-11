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
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  let i = 0
  const process = (bound, from) => {
    if (i === preorder.length || preorder[i] > bound) {
      return null
    }
  
    const num = preorder[i]
    const node = new TreeNode(num)
    i++

    node.left = process(node.val, "from left")
    node.right = process(bound, "from right")
    
    return node
  }

  const root = process(Number.MAX_SAFE_INTEGER, "from root")

  return root
}