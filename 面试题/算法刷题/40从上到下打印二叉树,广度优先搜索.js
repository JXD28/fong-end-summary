//广度优先搜索
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val){
    this.val  = val
    this.left = this.right = null
}

function insertFromArray(arr,index){
    if(index>=arr.length){
        return null
    }
    var root = new TreeNode(arr[index])
    arr[index*2+1] === null?root.left = null:root.left = insertFromArray(arr,index*2+1)
    arr[index*2+2] === null?root.right = null:root.right = insertFromArray(arr,index*2+2)
    return root
}

var levelOrder = function(root) {
    var queue = []
    var res = []
    if(!root){
        return []
    }else{
        queue.push(root)
        while(queue.length){
            var len = queue.length
            var temp = []
            for(let i =0;i<len;i++){
                var curNode = queue.shift()
                temp.push(curNode.val)
                if(curNode.left){
                    queue.push(curNode.left)
                }
                if(curNode.right){
                    queue.push(curNode.right)
                }
            }
            res.push(temp)
        }
        return res
    }
};

var root = insertFromArray([4,2,7,5,8,6,9],0)
var result = levelOrder(root)
console.log(result)