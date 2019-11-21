  const sortref = require('./Utility')
const readline = require('readline-sync')

var n = readline.questionInt("Enter the no of elements in array");

console.log("Before sorting :");
var nums = [];
console.log("enter the array elements:");

// Displays the array elements
for (var i = 0; i < n; i++) {
    nums[i] = readline.questionInt();
}
for (var i = 0; i < n; i++) {
console.log(typeof nums[i]);

}
console.log(nums);
Array.toString(nums);
console.log(nums)

console.log("After sorting :");

console.log(sortref.sort(nums, 0, nums.length - 1));
