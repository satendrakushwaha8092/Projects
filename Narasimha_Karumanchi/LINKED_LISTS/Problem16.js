/*Problem-16 Reverse a singly linked list.*/
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
    
    // ReverseList(){
    //     let temp=null,nextNode=null;
    //     while(this.head){
    //         nextNode=this.head.next
    //         this.head.next=temp
    //         temp=this.head
    //         this.head=nextNode
    //     }
    ReverseList(){
        let temp=null,nextNode=null;
        while(this.head){
            temp=this.head
            this.head=this.head.next
            temp.next=nextNode
            nextNode=temp
        }
        // for (let i = temp; i != null; i = i.next) {
        //     console.log(i.data)
        // }
        this.head=temp
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
ll.ReverseList()

ll.print()
