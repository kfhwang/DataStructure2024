function insertionSort(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be positioned
        let j = i - 1; // Start comparing with the previous element
        
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }
        arr[j + 1] = key; // Place the key in its correct position
    }
    return arr; // Return the sorted array
}

// Example usage:
const array = [25, 37, 18, 21, 5, 21];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);