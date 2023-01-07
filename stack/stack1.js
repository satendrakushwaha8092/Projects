const readline = require("readline-sync");
class Node{
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}

class stack{
    constructor(data){
        this.top=null
    }

    push(data){
        const node=new Node();
        node.data = data
        if(!this.top){
            this.top=node;
        }else{
            node.next=this.top
            this.top=node
        }
    }

    pop(){
        if(!this.top){
            console.log("stack in underflow")
        }else{
        this.top=this.top.next
        }
    }

    print(){
        for(let i=this.top;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const s=new stack()
while(1){
    console.log("enter your choice----\n1.insert element in stack\n2.pop element in stack\n3.print elements in stack")
    const choice=Number(readline.question());
    switch(choice){
        case 1:console.log("enter a number");
        s.push(Number(readline.question()))
        break;
        case 2:s.pop()
        break;
        case 3:s.print()
        break;
        default:console.log("enetr valid choice")
    }
}