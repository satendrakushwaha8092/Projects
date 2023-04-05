class Node{
    constructor(data,next){
        this.data=data
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert(data){
        const node=new Node
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    insertendoflist(data){
        const node=new Node
        node.data=data
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail = node
        }
    }

    reversell(){
        let temp=null
        let nextNode=null
        while(this.head){
            nextNode=this.head.next
            this.head.next=temp
            temp=this.head
            this.head=nextNode
        }
    }

    insertelementinsortedll(data){
        const node=new Node
        node.data=data
        if(data>this.tail.data){
            this.insertendoflist(data)
        }
        else{
            for(let i=this.head;i!=null;i=i.next){
            if(i.next.data>data){
                node.next=i.next
                i.next=node
                break
            }
        }
    }
    }

    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
        //console.log(this.head.data,this.tail.data)
    }
    print2(){
        for(let i=this.tail;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}
const ll=new linkedlist()
    ll.insert(5)
    ll.insert(4)
    ll.insert(2)
    ll.insert(1)
    ll.insertelementinsortedll(6)
    ll.print()
    //ll.reversell()
    // console.log("__________________________")
    // ll.print()
    // console.log("__________________________")
    // ll.print2()
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
//console.log("Welcome to Programiz!");