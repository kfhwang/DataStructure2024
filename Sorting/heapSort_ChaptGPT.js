Array.prototype.heapify = function (n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n && this[left] > this[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && this[right] > this[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [this[i], this[largest]] = [this[largest], this[i]]; // Swap

        // Recursively heapify the affected subtree
        this.heapify(n, largest);
    }
};

Array.prototype.heapsort = function () {
    const n = this.length;
    
    // Build a maxheap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [this[0], this[i]] = [this[i], this[0]]; // Swap

        // Call heapify on the reduced heap
        this.heapify(i, 0);
    }

    return this; // return the sorted array
};

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
arr.heapsort();
console.log("Sorted array:", arr);