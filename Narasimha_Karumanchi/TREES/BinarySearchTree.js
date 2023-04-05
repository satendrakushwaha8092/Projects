class BinarySearchTreeNode {
    constructor(left, data, right) {
        this.left = null
        this.data = data
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    BinarySearchTreeNodeFind(root, data) {
        if (root == null) {
            return null
        }
        if (data < root.data) {
            return this.BinarySearchTreeNodeFind(root.left, data)
        } else if (data > root.data) {
            return this.BinarySearchTreeNodeFind(root.right, data)
        }
        return root.data
        // if(data==root.data){
        //     return root.data
        // }else if(data>root.data){
        //     return this.BinarySearchTreeNodeFind(root.right,data)
        // }else{
        //     return this.BinarySearchTreeNodeFind(root.left,data)
        // }
    }

    //Non recursive version of the above algorithm can be given as:
    BinarySearchTreeFind(root, data) {
        if (root == null) {
            return null
        }
        while (root) {
            if (data == root.data) {
                return root
            } else if (data > root.data) {
                root = root.right
            } else {
                root = root.left
            }
        }
        return null
    }

    BinarySearchTreeNodeFindMin(root) {
        if (root == null) {
            return null
        }
        if (root.left == null) {
            return root.data
        } else {
            return this.BinarySearchTreeNodeFindMin(root.left)
        }
    }

    //Non recursive version of the above algorithm can be given as:
    BinarySearchTreeFindMin(root) {
        if (root == null) {
            return null
        }
        while (root.left != null) {
            root = root.left
        }
        return root
    }

    BinarySearchTreeNodeFindMax(root) {
        if (root == null) {
            return null
        }
        if (root.right == null) {
            return root.data
        } else {
            return this.BinarySearchTreeNodeFindMax(root.right)
        }
    }

    BinarySearchTreeFindMax(root) {
        if (root == null) {
            return null
        }
        while (root) {
            if (root.left != null) {
                root = root.left
            }
        }
        return root
    }

    BinarySearchTreeNodeInsert(root, data) {
        const node = new BinarySearchTreeNode()
        node.data = data
        if (!root) {
            return node
        }

        if (root.data < data) {
            root.right = this.BinarySearchTreeNodeInsert(root.right, data)
        }
        else {
            root.left = this.BinarySearchTreeNodeInsert(root.left, data)
        }
        return root;
    }

    Insert(data) {
        this.root = this.BinarySearchTreeNodeInsert(this.root, data)
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }

}

const bst = new BinarySearchTree()
// const arr = '6 4 10 3 1 5 7 12 9 8'.split(' ').map(val => +val);
// console.log(arr)
// for (let val of arr)
//     bst.Insert(val)

bst.Insert(6)
bst.Insert(4)
bst.Insert(7)
bst.Insert(1)
console.log(bst.BinarySearchTreeNodeFind(bst.root, 4))
console.log(bst.BinarySearchTreeFind(bst.root, 7))
console.log("minimum element:")
console.log(bst.BinarySearchTreeNodeFindMin(bst.root))
console.log(bst.BinarySearchTreeFindMin(bst.root))
console.log("max:")
console.log(bst.BinarySearchTreeNodeFindMax(bst.root))
console.log(bst.BinarySearchTreeFindMax(bst.root))
bst.inorder(bst.root)

