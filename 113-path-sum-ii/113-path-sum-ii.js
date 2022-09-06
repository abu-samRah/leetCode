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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let allPaths = [];
    
    function find_paths_recursive(currentNode, sum, currentPath) {
      if (!currentNode) {
        return;
      }
      currentPath.push(currentNode.val);

      if (currentNode.val === sum && !currentNode.left && !currentNode.right) {
        allPaths.push([...currentPath]);
      } else {
        find_paths_recursive(currentNode.left, sum - currentNode.val, [...currentPath], allPaths);
        find_paths_recursive(currentNode.right, sum - currentNode.val, [...currentPath], allPaths);
      }

      currentPath.pop();
    }
    
    find_paths_recursive(root, targetSum, []);
    return allPaths;
};

