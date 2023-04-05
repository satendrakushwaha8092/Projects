class Node{
    constructor(data,next){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insertinfront(data){
        const node=new Node
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    insertinlast(data){
        const node=new Node
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }
    deletefront(){
        if(!this.head){
            console.log("list is empty")
        }else{
            this.head=this.head.next
        }
    }
    deleteend(){
        let i
        for(i=this.head;i.next.next!=null;i=i.next);{
            i.next=null
            this.tail=i
        }
    }
    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const ll=new LinkedList()
ll.insertinfront(3)
ll.insertinfront(2)
ll.insertinfront(1)
ll.insertinlast(4)
ll.insertinlast(5)
ll.deletefront()
ll.deleteend()

ll.print()