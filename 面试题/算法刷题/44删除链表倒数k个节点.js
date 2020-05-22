/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//自己的写法,不太好
var removeNthFromEnd = function (head, n) {
    var fast = head
    low = head
    cur = head
    len = 0
    while (cur) {
        len++
        cur = cur.next
    }
    if (n === 1 && head.next === null) {
        return head = null
    }
    if (n === len) {
        return head = head.next
    }
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next) {
        fast = fast.next
        low = low.next
    }
    n === 1 ? low.next = null : low.next = low.next.next
    return head
};

//别人的写法:将节点指针放到数组中
var removeNthFromEnd = function(head, n) {
    let arr = []
    let cur = head
    while(cur) {
        arr.push(cur) //当前项存在放入数组中
        cur = cur.next
    }
    let delNode = arr[arr.length - n - 1] //获取到需要删除的前一个节点
    delNode ? (delNode.next = delNode.next.next) : (head = head.next ) //删除操作
    return head
};

//别人的:时间最短
var removeNthFromEnd = function(head, n) {
    let left = head;
    let right = head;
    let i = 0;

    while (i++ < n) {
        right = right.next;
    }

    if (!right) {
        return head.next;
    }

    while (right.next) {
        left = left.next;
        right = right.next;
    }

    const oldNext = left.next;
    left.next = left.next.next;
    oldNext.next = null;
    return head;
};