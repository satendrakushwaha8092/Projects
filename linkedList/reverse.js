class Node{
    constructor(data,next){
        this.data=data;
        this.next=null;
    }
}

class singlyLinkedList{
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
            this.head=node
        }
    }

    reverse(){
        let headref=null
        let temp=null
        for(let i=this.head;i!=null;i=i.next){
            headref=this.head
            this.head=this.head.next
            headref.next=temp
            temp=headref
        }
    }
    

    print(data){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const sl=new singlyLinkedList
sl.insertayBegining(6)
sl.insertayBegining(5)
sl.insertayBegining(4)

sl.insertayBegining(3)
sl.insertayBegining(2)
sl.insertayBegining(1)
sl.reverse()
sl.print()