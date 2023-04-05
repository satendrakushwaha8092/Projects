// class Node{
//     constructor(left,data,right){
//         this.left=null
//         this.data=data
//         this.right=null
//     }
// }

// class bst{
//     constructor(){
//         this.root=null
//     }
//     insertelement(data,root){
//         if(!root){
//             const node=new Node;
//             node.data=data
//             this.root=node
//         }
//         // if(root.data<data){
//         //     root.right=this.insertelement(root.right,data)
//         // }else{
//         //     root.left=this.insertelement(root.left,data)
//         // }
//         {
//             if(data<this.root){
//                 if(!this.root.left){
//                     this.root.left=node
//                 }
//                 else{
//                     return this.insertelement(data,this.root)
//                 }
//             }else{
//                 if(!this.root.right){
//                     this.root.right=node
//                 }
//                 else{
//                     return this.insertelement(data,this.root)
//                 }
//             }
//         }
//         return root;
//     }
//     // insert(data){
//     //     this.root=this.insertelement(this.root,data)
//     // }


//     inorder(root){
//         if(root){
//         this.inorder(root.left);
//         console.log(root.data);
//         this.inorder(root.right);
//         }
//     }

// }
// const bs=new bst()
// bs.insert(6)
// bs.insert(4)
// bs.insert(10)
// bs.insert(3)
// bs.insert(1)
// bs.inorder(bs.root)


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

    insertelement1(data){
        if(!this.root){
            const node=new Node;
            node.data=data
            this.root=node
            return this.root
        }
    }
    insertelement(root,data){
        if(!root){
            const node=new Node;
            node.data=data
            root=node
            return root
        }
        //console.log(root.data)
        if(root.data<data){
            root.right=this.insertelement(root.right,data)
        }else{
            root.left=this.insertelement(root.left,data)
        }
        return root;
    }

    inorder(root){
        if(root){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
        }
    }
}

const bs=new bst()
const arr=[1,2,3,4,5,6,7,8]
let temp=bs.insertelement1(arr[0])
//console.log(temp)
for(let i=1;i<arr.length;i++){
    temp=bs.insertelement(temp,arr[i])
}
bs.insertelement(temp,9)
//bs.insertelement(bs.root,8)
bs.inorder(bs.root)