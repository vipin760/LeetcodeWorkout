function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function isSameTree(p, q) {
  // Base cases
  if (!p && !q) {
    return true; // Both trees are empty, so they are the same
  }
  if (!p || !q || p.val !== q.val) {
    return false; // One of the trees is empty or values are different, so they are not the same
  }

  // Recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example usage:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2)); // Output: true
