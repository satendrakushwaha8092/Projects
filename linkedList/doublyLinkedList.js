class Node{
    constructor(prev,data,next){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}

class doublyLinkedList{
    constructor(data,next){
        this.head=null;
    }

    insertayBegining(data){
        const node=new Node()
        node.data=data;
        if(!this.head){
            this.head=node;
        }else{
            node.next=this.head
            this.head.prev=node;
            this.head=node
        }
    }

    insertAtEnd(data){
        const node=new Node()
        node.data=data
        let prev=null
        for(let i=this.head;i!=null;i=i.next){
            prev=i
        }
        prev.next=node
        node.prev=prev
    }

    deleteFromBeginning(){
        this.head=this.head.next
        this.head.prev=null
    }

    deleteFromEnd(){
        let prev=null
        for(let i=this.head;i.next!=null;i=i.next){
            prev=i
        }
        prev.next=null
    }

    print(data){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const sl=new doublyLinkedList
sl.insertayBegining(3)
sl.insertayBegining(2)
sl.insertayBegining(1)
sl.insertAtEnd(4)
sl.insertAtEnd(5)
sl.deleteFromBeginning()
sl.deleteFromEnd()
sl.print()