// Extending the Array class to include insertionSort method
Array.prototype.insertionSort = function() {
    for (let i = 1; i < this.length; i++) {
        let key = this[i]; // The element to be positioned
        let j = i - 1; // Start comparing with the previous element
        
        // Move elements of this[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && this[j] > key) {
            this[j + 1] = this[j]; // Shift element to the right
            j--;
        }
        this[j + 1] = key; // Place the key in its correct position
    }
    return this; // Return the sorted array
};

// Example usage:
const array =[87, 38, 77, 38, 25, 21, 1];
console.log("Original array:", array);
array.insertionSort();
console.log("Sorted array:", array);