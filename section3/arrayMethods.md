## Array Methods
1. Push - add an item to the end of an Array
2. Pop - remove an item from the end of an Array
3. Shift - add an item to the beginning of an Array
4. Unshift - Remove an item from the beginning of an Array

####Example of a 'Push' for an array.
let fruits = ['Apple', 'Banana']

let newLength = fruits.**push**('Orange')
// ["Apple", "Banana", "Orange"] - Orange has been added to the end of the array


####Example of a 'Pop' for an array.

let last = fruits.**pop**() // remove Orange (from the end)
// ["Apple", "Banana"]

####Example of a 'Shift' for an array.

let first = fruits.**shift**() // remove Apple from the front
// ["Banana"] This removes the first item from the list.

####Example of a 'UnShift' for an array.

let newLength = fruits.**unshift**('Strawberry') // add to the front
// ["Strawberry", "Banana"]
