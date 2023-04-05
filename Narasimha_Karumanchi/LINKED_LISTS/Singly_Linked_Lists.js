class ListNode{
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
    ListLength(){
        let count=0
        for(let i=this.head;i!=null;i=i.next){
            count++
        }
        console.log("length of ll=",count)
        return count
    }
    InsertInLinkedList(data,position){
        if(position==1){
            this.insertfront(data)
        }else if(position==this.ListLength()){
            this.insertlast(data)
        }
    }
    DeleteNodeFromLinkedList(position){
        if(position==1){
            this.deleteinfront()
        }else if(position==this.ListLength()){
            this.deleteinlast(data)
        }

    }
    DeleteLinkedList(){

    }
    insertfront(data){
        const node=new ListNode
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
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
    deleteinfront(){
        if(!this.head){
            console.log("list is empty")
        }
        this.head=this.head.next
    }
    deleteinlast(){
        let i=this.head
        if(!this.head){
            console.log("list is empty")
        }
        for(i=this.head;i.next.next!=null;i=i.next);
            this.tail=i
            this.tail.next=null
    }
    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const ll=new LinkedList()

module.exports.ll=ll


