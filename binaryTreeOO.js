class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

TreeNode.prototype.inOrderTraversal=function() {
    if (this.value) {
        if(this.left) this.left.inOrderTraversal(); // Visit left subtree
        console.log(this.value);      // Visit node
        if(this.right) this.right.inOrderTraversal(); // Visit right subtree
    }
}

TreeNode.prototype.preOrderTraversal=function() {
    if (this.value) {
        console.log(this.value);      // Visit node
        if(this.left) this.left.preOrderTraversal(); // Visit left subtree
        if(this.right) this.right.preOrderTraversal(); // Visit right subtree
    }
}

TreeNode.prototype.postOrderTraversal=function() {
    if (this.value) {
        if(this.left) this.left.postOrderTraversal(); // Visit left subtree
        if(this.right) this.right.postOrderTraversal(); // Visit right subtree
        console.log(this.value);      // Visit node
    }
}

// Creating a simple binary tree
const root = new TreeNode("A");
root.left = nodeB= new TreeNode("B");
root.right = nodeC = new TreeNode("C");
nodeB.right = new TreeNode("D");
nodeC.right = nodeE = new TreeNode("E");
nodeE.left = new TreeNode("F")

// Testing the traversals
console.log("In-Order Traversal:");
root.inOrderTraversal(); 

console.log("Pre-Order Traversal:");
root.preOrderTraversal();

console.log("Post-Order Traversal:");
root.postOrderTraversal(); 
