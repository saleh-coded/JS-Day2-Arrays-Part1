// ### TASK STEPS

// 1. Create an array and name it `groceries`, add 6 groceries to it
// 2. Print the second element from the array `groceries`
// 3. Print how many elements are in the array (i.e length of the array)
// 4. Print the last element in the array

let groceries = ["fruits", "vegetables", "sauces", "spices", "oils", "herbs"];

console.log(groceries[1]);

console.log(groceries.length);

let last = groceries.length - 1;
console.log(groceries[last]);

// 5. Remove the last element from the array and print it
// 6. Add two new and different elements to the end of the array

console.log("original array", groceries);
const theElement = groceries.pop();
console.log(theElement);
console.log("new array", groceries);

const result = groceries.push("apple", "orange");
console.log(result);
console.log("new array", groceries);

// 7. Create a new array named firstThreeItems and it’s elements are the first three elements from the groceries array. 

firstThreeItems = groceries.slice(0, 3);
// console.log(groceries.slice(0, 3));
console.log("firstThreeItems array = ", firstThreeItems);

// **Challenge** 

// 1. Delete the 3rd element in the array
// 2. Insert a new element at the beginning of the array
// 3. Remove the first two elements and replace them with “ketchup” and “chili”

const thiirdelement = firstThreeItems.slice(0, 2);
// console.log(groceries.slice(0, 3));
console.log("Delete the 3rd element in the array = ", thiirdelement);

newbeginningelement = thiirdelement.unshift("banana");
console.log("Insert a new element at the beginning of the array = ", thiirdelement);

removeelement = thiirdelement.splice(0, 2, "ketchup", "chili");
console.log("Remove the first two elements of the array = ", thiirdelement);


