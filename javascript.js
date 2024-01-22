class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function inorderTraversal(root) {
    const result = [];
    inorderRecursive(root, result);
    return result;
  }
  
  function inorderRecursive(node, result) {
    if (node) {
      inorderRecursive(node.left, result);
      result.push(node.val);
      inorderRecursive(node.right, result);
    }
  }
  
  // Example usage:
  // Example 1:
  // Input: root = [1,null,2,3]
  // Output: [1,3,2]
  const root1 = new TreeNode(1);
  root1.right = new TreeNode(2);
  root1.right.left = new TreeNode(3);
  const result1 = inorderTraversal(root1);
  console.log(result1);
  
  // Example 2:
  // Input: root = []
  // Output: []
  const root2 = null;
  const result2 = inorderTraversal(root2);
  console.log(result2);
  
  // Example 3:
  // Input: root = [1]
  // Output: [1]
  const root3 = new TreeNode(1);
  const result3 = inorderTraversal(root3);
  console.log(result3);
  