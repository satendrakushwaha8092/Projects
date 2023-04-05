class DLLNode{
    constructor(prev,data,next){
        this.prev=null
        this.data=data
        this.next=null
    }
}

class DoublyLinkedLists{
    constructor(){
        this.head=null
        this.tail=null
    }
    InsertInFrontOfList(data){
        const Node=new DLLNode
        Node.data=data
        if(!this.head){
            this.head=Node
            this.tail=Node
        }else{
            this.head.prev=Node
            Node.next=this.head
            this.head=Node
        }
    }

    InsertInEndOfList(data){
        const Node=new DLLNode
        Node.data=data
        if(!this.head){
            this.head=Node
            this.tail=Node
        }else{
            this.tail.next=Node
            Node.prev=this.tail
            this.tail=Node
        }
    }

    DeleteInFrontOfList(){
        if(!this.head){
            console.log("list is empty")
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
    }

    DeleteInEndOfList(){
        if(!this.head){
            console.log("list is empty")
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
    }

    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}
const DLL=new DoublyLinkedLists()
DLL.InsertInFrontOfList(10)
DLL.InsertInFrontOfList(9)
DLL.InsertInFrontOfList(8)
DLL.InsertInEndOfList(11)
DLL.InsertInEndOfList(12)
DLL.InsertInEndOfList(13)
DLL.DeleteInFrontOfList()
DLL.DeleteInEndOfList()
DLL.print()