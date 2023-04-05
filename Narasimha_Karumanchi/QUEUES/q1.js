class Node{
    constructor(data,next){
        this.data=data
        this.next=null
    }
}

class QUEUE{
    constructor(){
        this.front=null
        this.rear=null
    }
    enqueue(data){
        const node=new Node
        node.data=data
        if(!this.rear){
            this.rear=node
            this.front=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }
    dequeue(){
        if(!this.front){
            console.log("queue is undeflow")
        }else{
            this.front=this.front.next
        }
    }
    print(){
        for(let i=this.front;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const q=new QUEUE()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
q.print()
