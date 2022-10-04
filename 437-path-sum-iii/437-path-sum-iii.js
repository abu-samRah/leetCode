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
 * @return {number}
 */
var pathSum = function(root, S) {
    
  let count = 0
 const dfs = (node,path)=>{

   if(!node) return
   path.push(node.val)
   let sum = 0
   for(let i =path.length-1; i>=0; i--){
     sum+=path[i]
     if(sum === S) count++
   }
   dfs(node.left,path)
   dfs(node.right,path)
   path.pop()
 }
  dfs(root,[])
  return count
}

function count_paths_prefix_sum(node, targetSum, map, currentPathSum) {
  if (!node) return 0;

  // The number of paths that have the required sum.
  let pathCount = 0;

  // 'currentPathSum' is the prefix sum, i.e., sum of all node values from root to current node.
  currentPathSum += node.val;

  // This is the base case. If the current sum is equal to the target sum, we have found a path from root to
  // the current node having the required sum. Hence, we increment the path count by 1.
  if (targetSum === currentPathSum) pathCount++;

  //'currentPathSum' is the path sum from root to the current node. If within this path, there is a
  // valid solution, then there must be an 'oldPathSum' such that:
  // => currentPathSum - oldPathSum = targetSum
  // => currentPathSum - targetSum = oldPathSum
  // Hence, we can search such an 'oldPathSum' in the map from the key 'currentPathSum - targetSum'.
  if (map.has(currentPathSum - targetSum))
    pathCount += map.get(currentPathSum - targetSum);

  // This is the key step in the algorithm. We are storing the number of times the prefix sum
  // `currentPathSum` has occurred so far.
  map.set(currentPathSum, map.get(currentPathSum) + 1 || 1);

  // Counting the number of paths from the left and right subtrees.
  pathCount += count_paths_prefix_sum(node.left,targetSum, map, currentPathSum);
  pathCount += count_paths_prefix_sum(node.right, targetSum, map, currentPathSum);

  // Removing the current path sum from the map for backtracking.
  // 'currentPathSum' is the prefix sum up to the current node. When we go back (i.e., backtrack), then
  // the current node is no more a part of the path, hence, we should remove its prefix sum from the map.
  map.set(currentPathSum, map.get(currentPathSum) - 1);

  return pathCount;
}