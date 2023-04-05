class Node{
    constructor(data,next){
        this.data=data
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
    }
    push(data){
        const node=new Node
        node.data=data
        if(!this.top){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
    }
    pop(){
        if(!this.top){
            console.log("stack is underflow")
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

const st=new stack()
st.push(5)
st.push(4)
st.push(3)
st.push(2)
st.push(1)
st.pop()
st.print()