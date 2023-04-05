class Node{
    constructor(data,left,right){
        this.data=data
        this.left=null
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }
    insertelement(root,data){
        if(!root){
            const node=new Node(data);
            return node
        }
        if(root.data<data){
            root.right=this.insertelement(root.right,data)
        }else{
            root.left=this.insertelement(root.left,data)
        }
        return root;
    }
    insert(data){
        this.root=this.insertelement(this.root,data)
    }
    inorder(root){
        if(root){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
        }
    }
    print(){
        console.log(this.root)
    }
}
const bs=new bst()
const arr='6 4 10 3 1 5 7 12 9 8'.split(' ').map(val=>+val);
console.log(arr)
for(let val of arr)
bs.insert(val)
bs.inorder(bs.root)