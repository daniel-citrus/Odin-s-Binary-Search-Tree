class Node {
    value;
    left;
    right;

    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    root;

    constructor(array) {
        root = buildTree;
    }

    buildTree() {}
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const midpoint = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, midpoint));
    const right = mergeSort(array.slice(midpoint));
    const result = [];

    while (left && right) {
        if (left[0] <= right[0]) {
            
        }
    }
}

console.log(mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));
