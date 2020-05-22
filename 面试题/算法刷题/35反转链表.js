// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function nodeLink(){
    this.head = null
    this.length = 0
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    nodeLink.prototype.append = function(element){
        if(!this.head){
            this.head = new ListNode(element)
        }else{
            var curNode = this.head
            while(curNode.next){
                curNode = curNode.next
            }
            curNode.next = new ListNode(element)
        }
        this.length++
    }
     
    nodeLink.prototype.reverseList = function () {
        if(!this.head||!this.head.next){
            return this.head
        }else{
            var cur = this.head
            var pre = null
            while(cur){
                var next = cur.next
                cur.next = pre
                pre = cur
                cur = next
            }
        }
        return pre
    }
}

var node = new nodeLink
node.append('1')
node.append('2')
node.append('3')
node.append('4')
console.log(node.reverseList())