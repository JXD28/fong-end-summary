// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

function LinkedNode() {
    this.head = null
    this.length = 0
    function NodeList(val) {
        this.val = val
        this.next = null
    }

    LinkedNode.prototype.append = function (element) {
        if(!this.head){
            this.head = new NodeList(element)
        }else{
            var cur = this.head
            while(cur.next){
                cur = cur.next
            }
            cur.next = new NodeList(element)
        }
    }
}
mergeTwoLists = function(head1,head2){
    if(!head1){
        return head2
    }
    if(!head2){
        return head1
    }else{
        if(head1.val<head2.val){
            head1.next = mergeTwoLists(head1.next,head2)
            return head1
        }else{
            head2.next = mergeTwoLists(head1,head2.next)
            return head2
        }
    }
}

var node1 = new LinkedNode
var node2 = new LinkedNode
node1.append('1')
node1.append('2')
node1.append('3')
node1.append('4')

node2.append('1')
node2.append('3')
node2.append('5')
node2.append('6')
console.log(mergeTwoLists(node1.head,node2.head))