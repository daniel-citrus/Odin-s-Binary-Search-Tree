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
        this.root = buildTree(cleanArray(array));
    }

    buildTree(array) {
        
    }

    cleanArray(array) {
        return removeDuplicates(mergeSort(array));
    }

    mergeSort(array) {
        if (array.length === 1) {
            return array;
        }

        const midpoint = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, midpoint));
        const right = mergeSort(array.slice(midpoint));
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
}
