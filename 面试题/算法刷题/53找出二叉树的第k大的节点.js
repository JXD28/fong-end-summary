// 给定一棵二叉搜索树，请找出其中第k大的节点。



// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
//递归数组重建二叉树
function buildTree(arr, index) {
    if (index >= arr.length) {
        return null
    }
    var root = new TreeNode(arr[index])
    //index的规律
    root.left = buildTree(arr, index * 2 + 1)
    root.right = buildTree(arr, index * 2 + 2)
    return root
}

var kthLargest = function (root, k) {
    var arr = []
    function mapTree(root) {
        if (!root) {
            return null
        }
        arr.push(root.val)
        if (root.left) {
            mapTree(root.left)
        }
        if (root.right) {
            mapTree(root.right)
        }
    }
        mapTree(root)
        arr.sort((a, b) => b - a)
        return arr[k - 1]
}
//逆中序遍历 递归
var kthLargest = function(root, k) {
    let ans = [];
    
    function largest(node) {
      if (node === null) return ;
  
      largest(node.right);
      ans.push( node.val );
      largest(node.left);
    }
    largest(root);
    
    return ans[k - 1];
  };
  
//二叉搜索树的逆中序遍历 不用递归 更快
var kthLargest = function(root, k) {
    // 二叉搜索树的逆中序遍历
    if (!root) return null;

    let stack = [], count = 0;

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.right;
        } else {
            let cur = stack.pop();
            if (++count == k) {
                return cur.val;
            }
            root = cur.left;
        }
    }
    return null;
};


    var root = buildTree([1, null, 2], 0)
    console.log(kthLargest(root, 1))