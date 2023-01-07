const readline = require("readline-sync")
class Node{
    constructor(data,next){
        this.data = data;
        this.next = null
    }
}

class queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(data){
        const node=new Node()
        node.data = data
        if(!this.front){
            this.front=this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
    }

    dequeue(){
        if(!this.front){
            console.log("queue in underflow")
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

const q=new queue
while(1){
    console.log("enter your choice----\n1.insert element in queue\n2.dequeue element in queue\n3.print elements in queue")
    const choice=Number(readline.question());
    switch(choice){
        case 1:console.log("enter a number");
        q.enqueue(Number(readline.question()))
        break;
        case 2:q.dequeue()
        break;
        case 3:q.print()
        break;
        default:console.log("enetr valid choice")
    }
}