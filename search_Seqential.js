Array.prototype.sequentialSearch = function(target) {
    // 'this' refers to the array instance on which the function is called
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
};

// Example usage
const data = [{name:"Amy",Age:8}, {name:"John",Age:18}, {name:"Bob",Age:11}, {name:"Coby",Age:12}, {name:"Dany",Age:11}];
const target = "Amy";

const index = data.sequentialSearch(target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in the array.');
}