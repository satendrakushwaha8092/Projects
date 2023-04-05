class Node{
    constructor(left,data,right){
        this.left=null
        this.data=data
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

    insertelement(root,data){
        if(!root){
            const node=new Node;
            node.data=data
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
        console.log(root);
        this.inorder(root.right);
        }
    }

    BinarySearchTreeNode(root,data){
        if(root==null){
            return null
        }
        if(data<root.data)
            return this.BinarySearchTreeNode(root.left,data)
        else if(data>root.data)
            return this.BinarySearchTreeNode(root.right,data)
        return root
    }

    //Non recursive
    BinarySearchTreeNodeFind(root,data){
        if(root){
        while(root){
            if(data==root.data) return true
            else if(data>root.data) root=root.right
            else root=root.left
        }
    }
        return false
    }

    BinarySearchTreeNodeFindMin(root){
        if(!root){
            return null
        }
        else if(root.left==null){
            return root
        }
        else return this.BinarySearchTreeNodeFindMin(root.left)
    }

    //Non recursive
    BinarySearchTreeNodeFindMinnonrecur(root){
        if(!root){
            return null
        }
        while(root.left!=null)
            root=root.left
            return root
    }

    //Non recursive
    BinarySearchTreeNodeFindMaxnonrecur(root){
        if(!root){
            return null
        }
        while(root.right!=null)
            root=root.right
            return root
    }

    BinarySearchTreeNodeFindMax(root){
        if(!root){
            return null
        }
        else if(root.right===null){
            return root
        }
        else return this.BinarySearchTreeNodeFindMax(root.right)
    }

}
const bs=new bst()
//const arr='6 4 10 3 1 5 7 12 9 8'.split(' ').map(val=>+val);
//console.log(arr)
//for(let val of arr)
bs.insert(6)
bs.insert(4)
bs.insert(10)
bs.insert(3)
bs.insert(1)
//bs.insert(7)
//console.log(bs.BinarySearchTreeNodeFind(bs.root,4))
bs.inorder(bs.root)
console.log(bs.BinarySearchTreeNode(11))
console.log("Min=",bs.BinarySearchTreeNodeFindMin(bs.root))
console.log("Min=",bs.BinarySearchTreeNodeFindMinnonrecur(bs.root))
console.log("max=",bs.BinarySearchTreeNodeFindMax(bs.root))
console.log("max=",bs.BinarySearchTreeNodeFindMaxnonrecur(bs.root))



