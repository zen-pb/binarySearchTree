class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array, start = 0, end = array.length) {
        if (start > end) return null

        array = [...new Set(array)]
        array.sort()

        const mid = Math.floor((start + end) / 2)
        const root = new Node(array[mid])

        root.left = this.buildTree(root, start, mid - 1)
        root.right = this.buildTree(root, mid + 1, end)

        return root
    }

    insertItem(root, value){
        if (root == null)
            return new Node(value);

        if (value < root.value)
            root.left = this.insertItem(root.left, key);
        else
            root.right = this.insertItem(root.right, key);

        return root
    }

    deleteItem(root, value){
        if (root == null)
            return root;

        if (root.value > value)
            root.left = this.deleteItem(root.left, value);
        else if (root.value < value)
            root.right = this.deleteItem(root.right, value);
        else {
            if (root.left === null)
                return root.right;
            if (root.right === null)
                return root.left;

            const succeed = this.getSuccessor(root);
            root.value = succeed.value;
            root.right = this.deleteItem(root.right, succeed.value);
        }
        return root;
    }

    getSuccessor(current){
        current = current.right

        while (current != null && current.left != null)
            current = current.left

        return current
    }

    find(root, value){
        if (root == null || root.data === value)
            return root

        if (root.value > value){
            return this.find(root.left, value)
        }

        return this.find(root.right, value)
    }

    levelOrderForEach(root){
        if(root == null) return ""

        let levelOrder = ""

        let queue = [root]

        while(queue.length > 0){
            let current = queue.shift()

            levelOrder += String(current.value) + " ";

            if(current.left !== null) queue.push(current.left)
            if(current.right !== null) queue.push(current.right)
        }

        return levelOrder.trim()
    }

    inOrderForEach(root){
        let result = [];

        const traverse = (node) => {
            if (node === null) return;

            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }

        traverse(root);
        return result.join(" ");
    }

    preOrderForEach(root){
        let result = [];

        const traverse = (node) => {
            if (node === null) return;

            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(root);
        return result.join(" ");
    }

    postOrderForEach(root){
        let result = [];

        const traverse = (node) => {
            if (node === null) return;

            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }

        traverse(root);
        return result.join(" ");
    }

    height(value){}

    depth(value){}

    isBalanced(){}

    rebalance(){}
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.rigth = right;
    }
}