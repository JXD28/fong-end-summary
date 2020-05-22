//创建节点

function LinkedList() {
    function Node(val) {
        this.val = val
        this.next = null
    }

    this.length = 0
    this.head = null
    //链表尾部添加
    LinkedList.prototype.append = function (element) {
        var newNode = new Node(element)
        //头部为空
        if (!this.head) {
            this.head = newNode
        } else {
            //头部不为空,找next为空的
            var curNode = this.head
            //curNode.next不为空
            while (curNode.next) {
                curNode = curNode.next
            }
            //curNode.next为空
            curNode.next = new Node(element)
        }
        this.length++
    }

    //toString()方法
    LinkedList.prototype.toString = function () {
        var curNode = this.head
        var string = ""
        while (curNode) {
            string = string + curNode.val
            curNode = curNode.next
        }
        return string
    }

    //任意位置插入
    LinkedList.prototype.insert = function (position, element) {
        if (position >= this.length) {
            return false
        } else {
            var curNode = this.head
            var preNode = null
            var curPosition = 0
            while (curNode) {
                if (position === curPosition) {
                    if (position === 0) {
                        var insertNode = new Node(element)
                        this.head = insertNode
                        insertNode.next = curNode
                        this.length++
                        return this.head
                    } else {
                        var insertNode = new Node(element)
                        preNode.next = insertNode
                        insertNode.next = curNode
                        this.length++
                        return this.head
                    }
                } else {
                    if (curPosition >= this.length) {
                        return this.head
                    } else {
                        curPosition++
                        preNode = curNode
                        curNode = curNode.next
                    }

                }
            }

        }
    }

}

var node = new LinkedList
node.append('1')
node.append('2')
node.append('3')
node.append('4')

var newNode = node.insert(3, '2')
console.log(node.toString())