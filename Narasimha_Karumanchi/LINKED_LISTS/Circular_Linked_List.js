class CLLNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedLists {
    constructor() {
        this.head = this.head
    }

    CircularListLength() {
        let count = 0
        let current = this.head
        if (!this.head) console.log("list is empty")
        do {
            current = current.next
            count++
        } while (current != this.head);
        console.log("length:", count)
    }

    PrintCircularListData() {
        let current = this.head
        if (!this.head) console.log("list is empty")
        do {
            console.log(current.data)
            current = current.next
        } while (current != this.head);
    }
    InsertEndInCLL(data) {
        const Node = new CLLNode
        if (!this.head) {
            Node.data = data
            this.head = Node
            Node.next = Node
        } else {
            Node.data = data
            let curr = this.head
            while (curr.next != this.head) {
                curr = curr.next;
            }
            curr.next = Node
            Node.next = this.head

        }
        //let curr
        // if (!this.head) {
        //     this.head = Node
        //     Node.next = Node
        // } else {
        //     for(curr=this.head;curr.next!=this.head;curr=curr.next);
        //     curr.next = Node
        //     Node.next = this.head

        // }
    }
    InsertAtBeginInCLL(data) {
        let curr
        const node = new CLLNode
        node.data = data
        if (!this.head) {
            this.head = node
            node.next = node
        } else {
            node.next = this.head
            for (curr = this.head; curr.next != this.head; curr = curr.next);
            curr.next = node
            this.head = node
        }

    }

    DeleteLastNodeFromCLL() {
        let curr, prevnode
        if (!this.head) {
            console.log("list is empty")
        } else {
            for (curr = this.head; curr.next != this.head; curr = curr.next) {
                prevnode = curr
            }
            prevnode.next = this.head
        }
    }

    DeleteFrontNodeFromCLL() {
        let curr, prevnode
        if (!this.head) {
            console.log("list is empty")
        } else {
            for (curr = this.head; curr.next != this.head; curr = curr.next);
            curr.next = this.head.next
            this.head = this.head.next
        }
    }


    print() {
        let i
        for (i = this.head; i.next != this.head; i = i.next) {
            console.log(i.data)
        }
        console.log(i.data)
    }
    print2() {
        let curr = this.head
        while (curr.next != this.head) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}
const CLL = new CircularLinkedLists()
CLL.InsertEndInCLL(1)
CLL.InsertEndInCLL(2)
CLL.InsertEndInCLL(3)
CLL.InsertEndInCLL(4)
CLL.InsertEndInCLL(5)
CLL.InsertEndInCLL(6)
CLL.InsertAtBeginInCLL(0)
CLL.InsertAtBeginInCLL(-1)
CLL.DeleteLastNodeFromCLL()
CLL.DeleteFrontNodeFromCLL()
CLL.DeleteFrontNodeFromCLL()

CLL.CircularListLength()
CLL.PrintCircularListData()