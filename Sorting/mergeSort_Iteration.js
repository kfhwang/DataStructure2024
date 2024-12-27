function mergeSort(arr) {
    // If the array has less than 2 elements, it is already sorted
    if (arr.length < 2) {
        return arr;
    }

    const n = arr.length;
    // Create a temporary array for merging
    const tempArray = new Array(n);

    // Start with the size of subarrays
    for (let size = 1; size < n; size *= 2) {
        // Merge subarrays in pairs
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            const mid = Math.min(leftStart + size - 1, n - 1); // Ending index of left subarray
            const rightEnd = Math.min(leftStart + size * 2 - 1, n - 1); // Ending index of right subarray
            
            // Merge the two subarrays
            merge(arr, tempArray, leftStart, mid, rightEnd);
        }
    }

    return arr; // Return the sorted array
}

function merge(arr, tempArray, leftStart, mid, rightEnd) {
    let left = leftStart;   // Starting index for left subarray
    let right = mid + 1;    // Starting index for right subarray
    let index = leftStart;   // Starting index for the merged output

    // Compare the elements of both subarrays and merge them in sorted order
    while (left <= mid && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
            tempArray[index++] = arr[left++];
        } else {
            tempArray[index++] = arr[right++];
        }
    }

    // If there are remaining elements in the left subarray
    while (left <= mid) {
        tempArray[index++] = arr[left++];
    }

    // If there are remaining elements in the right subarray
    while (right <= rightEnd) {
        tempArray[index++] = arr[right++];
    }

    // Copy the sorted elements back to the original array
    for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = tempArray[i];
    }
}

// Example usage:
const array = [82, 22, 63, 45, 17, 39, 96, 55];
console.log("Original array:", array);
mergeSort(array);
console.log("Sorted array:", array);