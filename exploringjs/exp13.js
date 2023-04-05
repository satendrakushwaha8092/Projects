// Importing the module
const readline = require("readline-sync");
  
// Enter the number
// let a = Number(readline.question());
// let number = [];
// for (let i = 0; i < a; ++i) {
//   number.push(Number(readline.question()));
// }
// console.log(number);


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
    insertfrontoflist(data){
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


    deletefrontoflist(){
        if (!this.head) {
            console.log("list is empty!\n")
        }
        this.head=this.head.next
    }

    deletendoflist(){
        if (!this.head) {
            console.log("list is empty!\n")
        }
        else {
            let i
            let prev
            for (i = this.head; i.next!= null; i = i.next){
                prev=i
            }
            console.log("deleted data=", prev.next)
            prev.next = null
            this.tail = prev
    }
}

    searchInll(data){
        if (!this.head) {
            console.log("list is empty!\n")
        }
        for(let i=this.head;i!=null;i=i.next){
            if(i.data==data) return true
        }
        return false
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
        for(let i=this.head;i!=null;i=i.next){
            if(i.next.data>data){
                node.next=i.next
                i.next=node
                break
            }
        }
    }

    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i)
        }
    }
    print2(){
            let curr=this.head
        while(curr){
            console.log(curr.data)
            curr=curr.next
        }
    }
}
const ll=new linkedlist()
while(1){
    console.log("enetr your choice________\n1.insert\n2.insert in last\n3.delete front of list\n4.delete end of list\n5.search element\n9.print")
    let key = Number(readline.question());
    switch (key) {
        case 1: console.log("enter number of inputs")
        let a = Number(readline.question());
        for (let i = 0; i < a; i++) {
          ll.insertfrontoflist(Number(readline.question()));
        }  
        break;
        
        case 2:ll.insertendoflist(Number(readline.question()))
            break;
        case 3:ll.deletefrontoflist()
            break;
        case 4:ll.deletendoflist()
            break;
        case 5:console.log("enter element to search")
            console.log(ll.searchInll(Number(readline.question())))
            break;
        case 9:ll.print2()
            break;
        
        default:console.log("invalid")
            break;
    }
}
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
//console.log("Welcome to Programiz!");