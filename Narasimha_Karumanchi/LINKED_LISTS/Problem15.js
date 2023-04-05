class ListNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    insertfront(data) {
        const node = new ListNode
        node.data = data
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }
    insertlast(data){
        const node=new ListNode
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }
    InsertInSortedList(data) {
        if (this.head) {
            if (this.head.data > data) {
                this.insertfront(data)
            } else if (this.tail.data < data) {
                this.insertlast(data)
            } else {
                for (let i = this.head; i != null; i = i.next) {
                    if (i.next.data > data) {
                        const node = new ListNode
                        node.data = data
                        node.next = i.next
                        i.next = node
                        break
                    }
                }
            }
        } else {
            console.log("list is empty")
        }
    }
    print() {
        for (let i = this.head; i != null; i = i.next) {
            console.log(i.data)
        }
    }
}

const ll = new LinkedList()
ll.insertfront(5)
ll.insertfront(4)
ll.insertfront(2)
ll.insertfront(1)
ll.InsertInSortedList(3)
ll.InsertInSortedList(-1)
ll.InsertInSortedList(6)
ll.print()
