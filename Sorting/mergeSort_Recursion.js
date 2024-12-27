function mergeSort(arr) {
    // If the array has 0 or 1 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));  // Sort the left half
    const right = mergeSort(arr.slice(mid));     // Sort the right half

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0; // index for left array
    let j = 0; // index for right array

    // Compare elements and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in left, add them
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    // If there are remaining elements in right, add them
    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

// Example usage:
const array = [82, 22, 63, 45, 17, 39, 96, 55];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);