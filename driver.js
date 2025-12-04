import Tree from './binarySearchTree.js';

// 1. Helper function to generate random array
const generateRandomArray = (size, max) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
};

// 2. Pretty Print function (Modified to use node.value instead of node.data)
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

// --- Execution Script ---

console.log("-------------------------------------------");
console.log("1. Create a binary search tree from an array of random numbers < 100.");
// Generating 15 random numbers less than 100
const randomNumbers = generateRandomArray(15, 100);
console.log("Input Array:", randomNumbers);
const tree = new Tree(randomNumbers);
prettyPrint(tree.root);

console.log("\n-------------------------------------------");
console.log("2. Confirm that the tree is balanced by calling isBalanced.");
console.log("Is Balanced:", tree.isBalanced());

console.log("\n-------------------------------------------");
console.log("3. Print out all elements in level, pre, post, and in order.");
console.log("Level Order:", tree.levelOrderForEach());
console.log("Pre Order:  ", tree.preOrderForEach());
console.log("Post Order: ", tree.postOrderForEach());
console.log("In Order:   ", tree.inOrderForEach());

console.log("\n-------------------------------------------");
console.log("4. Unbalance the tree by adding several numbers > 100.");
// Adding numbers > 100 will likely create a long right-branch
tree.insertItem(tree.root, 101);
tree.insertItem(tree.root, 105);
tree.insertItem(tree.root, 120);
tree.insertItem(tree.root, 150);
tree.insertItem(tree.root, 200);

console.log("Tree after additions:");
prettyPrint(tree.root);

console.log("\n-------------------------------------------");
console.log("5. Confirm that the tree is unbalanced by calling isBalanced.");
console.log("Is Balanced:", tree.isBalanced());

console.log("\n-------------------------------------------");
console.log("6. Balance the tree by calling rebalance.");
tree.rebalance();

console.log("Tree after rebalancing:");
prettyPrint(tree.root);

console.log("\n-------------------------------------------");
console.log("7. Confirm that the tree is balanced by calling isBalanced.");
console.log("Is Balanced:", tree.isBalanced());

console.log("\n-------------------------------------------");
console.log("8. Print out all elements in level, pre, post, and in order.");
console.log("Level Order:", tree.levelOrderForEach());
console.log("Pre Order:  ", tree.preOrderForEach());
console.log("Post Order: ", tree.postOrderForEach());
console.log("In Order:   ", tree.inOrderForEach());