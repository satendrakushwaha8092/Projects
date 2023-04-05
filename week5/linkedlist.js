class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null
        this.lastNode = null
    }
    insertInFrontOfList(data) {
        const node = new Node(data)
        if (!this.firstNode) {
            this.firstNode = node
        }
        else {
            const temp = this.firstNode
            this.firstNode = node
            node.next = temp
        }
        
    }
    printList(){
        let curr = this.firstNode
        while (curr) {
            console.log(curr)
            curr = curr.next
        }
    }
}
const list=new LinkedList()
list.insertInFrontOfList(10)
list.insertInFrontOfList(10)
list.insertInFrontOfList(10)
list.insertInFrontOfList(10)

list.printList()