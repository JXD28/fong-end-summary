function Node(val){
    this.val = val
    this.left  = this.right = null
}

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     insert(data){
//         const newNode = new Node(data)
//         //如果this.root为null就直接添加,否则进行比较插入
//         const insertNode = (node,newNode)=>{
//             if(newNode.data<node.data){
//                 if(node.left === null){
//                     node.left = newNode
//                 }else{
//                     insertNode(node.left,newNode)
//                 }
//             }else{
//                 if(node.right === null){
//                     node.right = newNode
//                 }else{
//                     insertNode(node.right,newNode)
//                 }
//             }
//         }
//         if(!this.root){
//             this.root = newNode
//         }else{
//             insertNode(this.root,newNode)
//         }
       
//     }
// }

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(data){
        //如果this.root为null就直接添加,否则进行比较插入
        var insertNode = (node)=>{         
            if(data<node.val){
                if(node.left === null){
                    node.left = new Node(data)
                }else{
                    insertNode(node.left)
                }
            }else{
                if(node.right === null){
                    node.right = new Node(data)
                }else{
                    insertNode(node.right)
                }
            }
        }
        if(!this.root){
            this.root = new Node(data)
        }else{
            insertNode(this.root)
        }
    }
    
}
const tree = new BinarySearchTree();
//最先插入谁谁就是root
tree.insert(11);//root
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree);
console.log('root1111',tree.root);