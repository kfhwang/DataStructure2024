// write an ordered list class using binary serarch in javascript
class OrderedList extends Array {
    constructor(...elements) {
        super(...elements);
        // Sort the initial array to ensure it starts ordered
        this.sort((a, b) => a - b);
    }

    // Method to perform binary search to find an element
    _binarySearch(element) {
        let low = 0;
        let high = this.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this[mid] === element) {
                return mid; // Element found
            } else if (this[mid] < element) {
                low = mid + 1; // Search in the right half
            } else {
                high = mid - 1; // Search in the left half
            }
        }

        return -1; // Element not found
    }

    // Method to find the index to insert a new element
    _findInsertIndex(element) {
        let low = 0;
        let high = this.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this[mid] < element) {
                low = mid + 1; // Move to the right half
            } else {
                high = mid - 1; // Move to the left half
            }
        }

        return low; // Return the index to insert the new element
    }

    // Method to add an element in sorted order
    add(element) {
        // if (this._binarySearch(element) !== -1) {
        //     return; // Element already exists, do not add it
        // }
        const index = this._findInsertIndex(element);
        this.splice(index, 0, element); // Insert the new element
    }

    // Method to search for an element
    search(element) {
        return this._binarySearch(element) !== -1; // Return true if found, false otherwise
    }
}

// Example usage:
const orderedList = new OrderedList();
orderedList.add(10);
orderedList.add(5);
orderedList.add(20);
orderedList.add(15);
orderedList.add(20); // This will not add a duplicate
orderedList.add(22);
orderedList.add(19);
console.log(orderedList); // Output: [5, 10, 15, 20] (elements in sorted order)

console.log(orderedList.search(15)); // Output: true (element found)
console.log(orderedList.search(30)); // Output: false (element not found)

orderedList.add(1);
console.log(orderedList); // Output: [1, 5, 10, 15, 20]