/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }                                                                                                                                               
    var preRoot = preorder[0]
    var inRootIndex = inorder.indexOf(preRoot)

    var node = new TreeNode(preRoot)
    node.left = buildTree(preorder.slice(1, inRootIndex + 1), inorder.slice(0, inRootIndex))
    node.right = buildTree(preorder.slice(inRootIndex + 1), inorder.slice(inRootIndex + 1))
    return node
};

//slice 的参数  (截取的index,结束处是第几个元素)

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]

console.log(buildTree(preorder,inorder))
