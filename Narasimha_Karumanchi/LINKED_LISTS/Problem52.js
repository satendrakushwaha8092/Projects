/*Problem-52 Given a linked list, how do you modify it such that all the even numbers appear
before all the odd numbers in the modified linked list?
 */

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
    evennumberbeforeoddnumber(){
        //let i
        if(this.head.data%2!=0){
            let temp=this.head
            this.head=this.head.next
            this.tail.next=temp
            this.tail=temp
            this.tail.next=null
            // for(i=this.head;i.next!=null;i=i.next);
            // console.log(i.data)
            // i.next=temp
        }else{
            for(let i=this.head;i!=null;i=i.next){
                if(i.data%2!=0){
                    i.next=i.next.next
                }
            }

        }
    }
    print(){
        for(let i=this.head;i!=null;i=i.next){
            console.log(i.data)
        }
    }
}

const ll=new LinkedList()
ll.insertfront(5)
ll.insertfront(4)
ll.insertfront(3)
ll.insertfront(2)
ll.insertfront(1)
ll.evennumberbeforeoddnumber()
ll.print()
