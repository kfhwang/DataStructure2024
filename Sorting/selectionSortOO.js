// Extending the Array class to include selectionSort method
Array.prototype.selectionSort = function() {
    // Store the length of the array
    const length = this.length;

    // Iterate through the entire array
    for (let i = 0; i < length - 1; i++) {
        // Assume the first element of the unsorted segment is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the unsorted segment
        for (let j = i + 1; j < length; j++) {
            if (this[j] < this[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // If minIndex is not the original position, swap them
        if (minIndex !== i) {
            // Swap the elements
            const temp = this[i];
            this[i] = this[minIndex];
            this[minIndex] = temp;
        }
    }
    return this; // Return the sorted array
};

// Example usage:
const array =[87, 38, 77, 38, 25, 21, 1];
console.log("Original array:", array);
array.selectionSort();
console.log("Sorted array:", array);