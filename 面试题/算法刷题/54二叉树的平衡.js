// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。



// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

// 返回 false 。




function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
//递归数组重建二叉树
function buildTree(arr, index) {
    if (index >= arr.length) {
        return null
    }
    var root
    if (arr[index] === null) {
        root = null
    } else {
        root = new TreeNode(arr[index])
        //index的规律
        root.left = buildTree(arr, index * 2 + 1)
        root.right = buildTree(arr, index * 2 + 2)
    }
    return root
}
var isBalanced = function (root) {
    var ans = true
    function dfs(root) {
        if (!root) {
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        if (Math.abs(left - right) > 1) {
            ans = false
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return ans
}

var result = isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4], 0))
console.log(result)