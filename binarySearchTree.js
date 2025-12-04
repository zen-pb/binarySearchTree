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

    insertItem(value){}

    deleteItem(value){}

    find(value){}

    levelOrderForEach(callback){}

    inOrderForEach(callback){}

    preOrderForEach(callback){}

    postOrderForEach(callback){}

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