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

    removeDuplicates(array) {
        const set = new Set(array);
        const result = [];

        for (const entry of set) {
            result.push(entry);
        }

        return result;
    }

    function 

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
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
