class Node{
    constructor(data,left,right){
        this.data=data
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
        this.size=0
    }
    insert(data){
        const node=new Node(data)
        if(!this.root){
            this.root=node
        }else{
            
        }
    }
}