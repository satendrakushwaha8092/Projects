class DLLNode {
    constructor(prev, data, next) {
        this.prev = null
        this.data = data
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    DLLInsert(data, position) {
        const dllnode = new DLLNode
        if (position == 1) {

        }
    }
    DLLDelete(position){

    }
    insertfront(data) {
        const dllnode = new DLLNode
        dllnode.data = data
        if (!this.head) {
            this.head = dllnode
            this.tail = dllnode
        } else {
            dllnode.next = this.head
            this.head.prev = dllnode
            this.head = dllnode
        }
    }
    insertend(data){
        const dllnode = new DLLNode
        dllnode.data = data
        if (!this.head) {
            this.head = dllnode
            this.tail = dllnode
        } else {
            this.tail.next=dllnode
            dllnode.prev=this.tail
            this.tail=dllnode
        }
    }
    deletefront(){
        if(!this.head){
            console.log("List is empty")
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
    }
    deleteend(){
        if(!this.head){
            console.log("List is empty")
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
    }
    print() {
        for (let i = this.head; i != null; i = i.next) {
            console.log(i.data)
        }
    }
    printrev() {
        for (let i = this.tail; i != null; i = i.prev) {
            console.log(i.data)
        }
    }

}

// const dll=new DoublyLinkedList()
// dll.insertfront(5)
// dll.insertfront(4)
// dll.insertfront(3)
// dll.insertfront(2)
// dll.insertfront(1)
// dll.insertend(6)
// dll.insertend(7)
// dll.insertend(8)
// dll.deletefront()
// dll.deleteend()

// //dll.print()
// dll.printrev()
module.exports.DoublyLinkedList=DoublyLinkedList


