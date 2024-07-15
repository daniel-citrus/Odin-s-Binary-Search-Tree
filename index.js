class Node {
    constructor(value, left = null, right = null) {
        this.data = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(this.cleanArray(array));
    }

    buildTree(array) {
        if (!array.length) {
            return null;
        }

        const midpoint = Math.floor(array.length / 2);
        const left = this.buildTree(array.slice(0, midpoint));
        const right = this.buildTree(array.slice(midpoint + 1));
        return new Node(array[midpoint], left, right);
    }

    cleanArray(array) {
        return this.removeDuplicates(this.mergeSort(array));
    }

    deleteItem(value, node = this.root) {
        if (!node) {
            return null;
        }

        // Find match
        if (value < node.data) {
            node.left = this.deleteItem(value, node.left);
        } else if (value > node.data) {
            node.right = this.deleteItem(value, node.right);
        }

        // Match found
        if (value === node.data) {
            // Only one child node
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }

            // Two child nodes
            node.data = this.minimum(node.right);
            node.right = this.deleteItem(node.data, node.right);
        }

        return node;
    }

    find(value) {
        let ptr = this.root;

        while (ptr) {
            if (value < ptr.data) {
                ptr = ptr.left;
            } else if (value > ptr.data) {
                ptr = ptr.right;
            } else {
                break;
            }
        }

        return ptr;
    }

    height(node) {
        if (!node) {
            return -1;
        }

        const left = this.height(node.left);
        const right = this.height(node.right);

        if (left <= right) {
            return right + 1;
        } else {
            return left + 1;
        }
    }

    inOrder(callback) {
        const result = [];
        helper(this.root);

        function helper(root) {
            if (!root) {
                return null;
            }

            helper(root.left);

            if (callback) {
                callback(root.data);
            } else {
                result.push(root.data);
            }

            helper(root.right);
        }

        return result;
    }

    insert(value, node = this.root) {
        if (node.data === value) {
            return;
        }

        if (value < node.data) {
            if (!node.left) {
                node.left = new Node(value);
            } else {
                this.insert(value, node.left);
            }
        } else if (value > node.data) {
            if (!node.right) {
                node.right = new Node(value);
            } else {
                this.insert(value, node.right);
            }
        }
    }

    levelOrder(callback) {
        const queue = [];
        const result = [];
        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();

            if (callback) {
                callback(node.data);
            } else {
                result.push(node.data);
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

    mergeSort(array) {
        if (array.length === 1) {
            return array;
        }

        const midpoint = Math.floor(array.length / 2);
        const left = this.mergeSort(array.slice(0, midpoint));
        const right = this.mergeSort(array.slice(midpoint));
        let result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        if (left.length) {
            result = result.concat(left);
        }

        if (right.length) {
            result = result.concat(right);
        }

        return result;
    }

    // Find the smallest value in the tree
    minimum(root) {
        let ptr = root;
        let min = root.data;

        while (ptr) {
            if (ptr.data < min) {
                min = ptr.data;
            }

            ptr = ptr.left;
        }

        return min;
    }

    postOrder(callback) {
        const result = [];
        helper(this.root);

        function helper(root) {
            if (!root) {
                return null;
            }

            helper(root.left);
            helper(root.right);

            if (callback) {
                callback(root.data);
            } else {
                result.push(root.data);
            }
        }

        return result;
    }

    preOrder(callback) {
        const result = [];
        helper(this.root);

        function helper(root) {
            if (!root) {
                return null;
            }

            if (callback) {
                callback(root.data);
            } else {
                result.push(root.data);
            }

            helper(root.left);
            helper(root.right);
        }

        return result;
    }

    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? '│   ' : '    '}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? '    ' : '│   '}`,
                true
            );
        }
    }

    removeDuplicates(array) {
        const set = new Set(array);
        const result = [];

        for (const entry of set) {
            result.push(entry);
        }

        return result;
    }
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.deleteItem(67);
tree.prettyPrint();