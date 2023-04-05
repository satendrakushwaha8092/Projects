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
                //console.log(curr.data)
                curr = curr.next;
            }
            curr.next = Node
            Node.next = this.head

        }
    }

    InsertAtBeginInCLL(data) {
        const Node = new CLLNode
        if (!this.head) {
            Node.data = data
            this.head = Node
            Node.next = Node
        } else {
            Node.data = data
            let curr = this.head
            while (curr.next != this.head) {
                //console.log(curr.data)
                curr = curr.next;
            }
            curr.next = Node
            Node.next = this.head
            this.head=Node

        }
    }

    InsertAtKthInCLL(data,k) {
        const Node = new CLLNode
        if (!this.head) {
            Node.data = data
            this.head = Node
            Node.next = Node
        } else {
            let count=1
            Node.data = data
            let curr = this.head
            while (curr.next != this.head) {
                count++
                if(count==k){
                    Node.next=curr.next
                    curr.next=Node
                }
                //console.log(curr.data)
                curr = curr.next;
            }

        }
    }

    DeleteLastNodeFromCLL(){
        if (!this.head) {
            console.log("list is empty")
        } else {
            let prevnode
            let curr = this.head
            while (curr.next != this.head) {
                prevnode=curr
                //console.log(curr.data)
                curr = curr.next;
            }
            prevnode.next = this.head

        }
    }

    DeleteFrontNodeFromCLL(){
        if (!this.head) {
            console.log("list is empty")
        } else {
            //this.head=this.head.next
            let curr = this.head
            while (curr.next != this.head) {
                //console.log(curr.data)
                curr = curr.next;
            }
            curr.next = this.head.next
            this.head=this.head.next
        }
    }

    DeleteKthNodeFromCLL(k){
        let count=1
        if (!this.head) {
            console.log("list is empty")
        } else {
            //this.head=this.head.next
            let curr = this.head
            while (curr.next != this.head) {
                count++
                if(count==k){
                    curr.next=curr.next.next
                }
                //console.log(curr.data)
                curr = curr.next;
            }
        }
    }

    print() {
        let i
        for (i = this.head; i.next!= this.head; i = i.next) {
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
    print3() {
        let curr = this.head
        do {
            console.log(curr.data)
            curr = curr.next
        } while (curr != this.head)
    }
    count(){
        let count=0
        let curr = this.head
        do {
            count++
            curr = curr.next
        } while (curr != this.head)
        console.log("number if elements",count)
    }
}
let CLL = new CircularLinkedLists()
CLL.InsertEndInCLL(1)
CLL.InsertEndInCLL(2)
CLL.InsertEndInCLL(3)
CLL.InsertEndInCLL(4)
CLL.InsertEndInCLL(5)
CLL.InsertEndInCLL(6)
CLL.InsertEndInCLL(7)
CLL.InsertEndInCLL(8)
CLL.InsertAtBeginInCLL(100)
CLL.InsertAtBeginInCLL(101)
CLL.InsertAtBeginInCLL(102)
CLL.DeleteLastNodeFromCLL()
CLL.InsertEndInCLL(10)
CLL.DeleteFrontNodeFromCLL()
CLL.DeleteKthNodeFromCLL(3)
CLL.InsertAtKthInCLL(500,4)


 CLL.print()
// console.log("___________________")
// CLL.print2()
console.log("___________________")
CLL.print3()
CLL.count()