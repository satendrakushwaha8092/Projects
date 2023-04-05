class Node {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null
        this.lastNode = null
    }
    insertInFrontOfList(data) {
        const node = new Node
        if (!this.firstNode) {
            node.data = data
            this.firstNode = node
            this.lastNode = node
        }
        else {
            node.data = data
            node.next = this.firstNode
            this.firstNode = node
        }

    }
    insertInLastOfList(data) {
        const node = new Node
        if (!this.firstNode) {
            node.data = data
            this.firstNode = node
            this.lastNode = node
        }
        else {
            node.data = data
            this.lastNode.next = node
            this.lastNode = node
        }


    }

    // insertIngivenpositionOfList(data,k){
    //     const node = new Node
    //     if (!this.firstNode) {
    //         node.data=data
    //         this.firstNode = node
    //         this.lastNode=node
    //     }
    //     else {
    //         let count
    //         let i
    //         for(count=2,i=this.firstNode;i!=null;i=i.next,count++){
    //             if(count==k){
    //                 node.data=data
    //                 node.next=i
    //                 i.next=node
    //             }
    //     }
    //     }


    // }


    deleteInFrontOfList() {
        if (!this.firstNode) {
            console.log("list is empty")
        }
        else {
            this.firstNode = this.firstNode.next
        }

    }

    deleteInLastOfList() {
        if (!this.firstNode) {
            console.log("list is empty")
        }
        else {
            let i
            for (i = this.firstNode; i.next.next != null; i = i.next);
            i.next = null
            this.lastNode = i
            console.log("deleted data=", i)
        }
    }

    deleteInKthOfList(k) {
        if (!this.firstNode) {
            console.log("list is empty")
        }
        else {
            let count
            let i
            for (count = 1, i = this.firstNode; i != null; i = i.next, count++) {
                if (count == k) {
                    console.log("deleted element=",i)
                    i.next=i.next.next
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
    
    // printList(){
    //     let curr = this.firstNode
    //     while (curr) {
    //         console.log(curr)
    //         curr = curr.next
    //     }
    // }
    printList2() {
        for (let i = this.firstNode; i != null; i = i.next) {
            console.log(i)
        }
    }
}
const list = new LinkedList()
list.insertInFrontOfList(10)
list.insertInFrontOfList(9)
list.insertInFrontOfList(8)
list.insertInFrontOfList(7)
list.insertInLastOfList(0)
list.insertInLastOfList(1)
list.insertInLastOfList(2)
// list.insertIngivenpositionOfList(100,5)
list.deleteInFrontOfList()
list.deleteInLastOfList()
list.deleteInKthOfList(3)

//list.printList()
console.log("-------------------")
list.printList2()