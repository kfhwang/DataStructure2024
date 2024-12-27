function selectionSort(arr) {
    // Iterate through the entire array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the first element of the unsorted segment is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the unsorted segment
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // If minIndex is not the position of the current element, swap them
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr; // Return the sorted array
}

// Example usage:
const array = [87, 38, 77, 38, 25, 21, 1];
console.log("Original array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);