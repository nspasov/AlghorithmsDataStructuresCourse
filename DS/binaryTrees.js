class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(value){
        this.root = null;
    }

    insert(value){

        const newNode = new Node(value);
        let inserted = false;

        if(this.root === null)
            return this.root = newNode;

        let currentNode = this.root;

        while(inserted === false){
            if(currentNode.value === newNode.value){
                return 'No dublicates allowed';
            }
            if(currentNode.value > newNode.value){

                if(currentNode.left === null){
                    currentNode.left = newNode;
                    inserted = true;
                }

                currentNode = currentNode.left;
                continue;
            }

            if(currentNode.value < newNode.value){

                if(currentNode.right === null){
                    currentNode.right = newNode;
                    inserted = true;
                }

                currentNode = currentNode.right;
                continue;
            }
        }
    }

    lookup(value){

        let found = false;

        if(this.root === null)
            return found; // false
        
        let currentNode = this.root;

        while(currentNode !== null){

            if(currentNode.value === value){
                found = true;
                break;
            }

            if(currentNode.value < value){
                currentNode = currentNode.right;
                continue;
            }

            if(currentNode.value > value){
                currentNode = currentNode.left;
                continue;
            }

        }

        return found;
    }
    //remove

}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(170);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(1);
console.log(myBinarySearchTree.lookup(2200));

// function traverse(node){
//     const tree = {value: node.value};
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
// }
