# binarySearchTree

A JavaScript Binary Search Tree (BST) activity from theodinproject. It showcases a Tree class that has the following methods:

- **buildTree(array)**: Takes an array of data (which is sorted and duplicates removed) and turns it into a balanced binary tree full of Node objects, returning the level-0 root node.
- **insertItem(root, value)**: Takes a root node and a value to insert. It traverses the tree and places the new value in the correct leaf position to maintain the binary search tree structure.
- **deleteItem(root, value)**: Takes a root node and a value. It removes the node containing that value from the tree while handling children nodes to preserve the binary search tree structure.
- **find(root, value)**: Takes a root node and a value. It returns the specific node object containing the given value, or null if the value is not found.
- **levelOrderForEach(root)**: Takes a root node and traverses the tree in breadth-first level order, returning an array containing the values of the nodes visited.
- **inOrderForEach(root)**: Takes a root node and traverses the tree in depth-first in-order (left-root-right), returning an array of the values.
- **preOrderForEach(root)**: Takes a root node and traverses the tree in depth-first pre-order (root-left-right), returning an array of the values.
- **postOrderForEach(root)**: Takes a root node and traverses the tree in depth-first post-order (left-right-root), returning an array of the values.
- **height(root)**: Takes a node and returns its height, defined as the number of edges in the longest path from that node to a leaf node.
- **depth(root, value)**: Takes a root node and a specific value. It returns the depth of the node containing that value, defined as the number of edges from the tree's root to that node.
- **isBalanced(root)**: Takes an optional root node and returns true or false based on whether the tree is balanced (the difference between the heights of the left and right subtrees of every node is not more than 1).
- **rebalance()**: Reconstructs the entire tree structure. It takes the existing unbalanced tree, converts it to a sorted array, and rebuilds it into a perfectly balanced binary search tree.