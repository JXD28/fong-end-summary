function ListNode(val){
    this.val = val
    this.next = null
}

// function deleteNode(head,val){
//     if(!head){
//         return null
//     }
//     var node = new nodeList(0)
//     node.next =head
//     var curNode = node
//     console.log(node)
//     while(curNode.next){
//         if(curNode.next.val = val){
//             curNode.next = curNode.next.next
//             return node.next
//         }
//         curNode = curNode.next
//     }
// }
//head 是头指针,指向第一个节点
var deleteNode = function(head, val) {
    if(!head) return null
    //设置一个头节点,内容可以为空,目的是为了使第一个节点也能正常使用删除等的操作
    let vHead = new ListNode();
    //头节点的next中存储头指针,指向第一个节点
    vHead.next = head;
    let curNode = vHead;
    //第一次循环,看第一个节点中是否有值等于val,没有则将当前节点指向下一个节点的next
    while(curNode.next){
        //有则进行删除操作
        if(curNode.next.val === val){
           curNode.next = curNode.next.next;
           return vHead.next;
        }       
        curNode = curNode.next;
    }
};



console.log(deleteNode([1,2,3,4],4))



