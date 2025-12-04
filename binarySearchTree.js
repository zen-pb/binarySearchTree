class Tree {
    constructor(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    insertItem(root, value) {
        if (root == null) return new Node(value);

        if (value < root.value)
            root.left = this.insertItem(root.left, value);
        else if (value > root.value)
            root.right = this.insertItem(root.right, value);

        return root;
    }

    deleteItem(root, value) {
        if (root == null) return root;

        if (value < root.value)
            root.left = this.deleteItem(root.left, value);
        else if (value > root.value)
            root.right = this.deleteItem(root.right, value);
        else {
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            const succeed = this.getSuccessor(root);
            root.value = succeed.value;
            root.right = this.deleteItem(root.right, succeed.value);
        }
        return root;
    }

    getSuccessor(current) {
        current = current.right;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    find(root, value) {
        if (root == null || root.value === value)
            return root;

        if (value < root.value)
            return this.find(root.left, value);

        return this.find(root.right, value);
    }

    levelOrderForEach(root = this.root) {
        if (root == null) return [];
        let levelOrder = [];
        let queue = [root];

        while (queue.length > 0) {
            let current = queue.shift();
            levelOrder.push(current.value);
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        return levelOrder;
    }

    inOrderForEach(root = this.root) {
        let result = [];
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        traverse(root);
        return result;
    }

    preOrderForEach(root = this.root) {
        let result = [];
        const traverse = (node) => {
            if (node === null) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        };
        traverse(root);
        return result;
    }

    postOrderForEach(root = this.root) {
        let result = [];
        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        };
        traverse(root);
        return result;
    }

    height(root = this.root) {
        if (!root) return -1;
        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(root, value) {
        if (!root) return -1;
        let dist = -1;
        if (root.value === value ||
            (dist = this.depth(root.left, value)) >= 0 ||
            (dist = this.depth(root.right, value)) >= 0) {
            return dist + 1;
        }
        return dist;
    }

    isBalanced(root = this.root) {
        return this.isBalancedRecursive(root) !== -1;
    }

    isBalancedRecursive(root) {
        if (root === null) return 0;

        const lHeight = this.isBalancedRecursive(root.left);
        if (lHeight === -1) return -1;

        const rHeight = this.isBalancedRecursive(root.right);
        if (rHeight === -1) return -1;

        if (Math.abs(lHeight - rHeight) > 1) return -1;

        return Math.max(lHeight, rHeight) + 1;
    }

    rebalance() {
        const sortedArr = this.inOrderForEach(this.root);
        this.root = this.buildTree(sortedArr);
    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export default Tree;