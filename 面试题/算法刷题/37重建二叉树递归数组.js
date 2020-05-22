// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
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
    var root
    //将节点赋值为null 而不是将节点的val赋值为null,否则判断节点是否存在会出错
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

console.log(buildTree([1, 2, 2, 3, 3, null, null, 4, 4],0))