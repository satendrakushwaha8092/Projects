class Node{
    constructor(data,next){
        this.data=data
        this.next=null
    }
}

class queue{
    constructor(){
        this.rear=null
        this.front=null
    }
    EnQueue(data){
        const node=new Node()
        node.data=data
        if(!this.rear){
            this.rear=node
            this.front=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    DeQueue(){
        this.front=this.front.next
    }
    print(){
        for(let i=this.front;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const q=new queue()
q.EnQueue(1)
q.EnQueue(2)
q.EnQueue(3)
q.EnQueue(4)
q.DeQueue()
q.DeQueue()
q.EnQueue(5)
q.print()